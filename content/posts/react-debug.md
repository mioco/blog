---
title: 'React 本地调试'
date: '2025-05-03'
updatedAt: '2025-05-03'
tags: ['React']
---
## 目录结构
[React](https://github.com/facebook/react/tree/main) 用的是 monorepo 的项目管理方式，在尝试源码阅读时，会发现 packages 中有大量的工具库，不清楚哪些是 react 开发中会用到的。所以首先需要从 react 和 react-dom 这两个已知的入口分析哪些 packages 是实际要用的。

我们可以通过 madge 工具生成 react/index.js 和 react-dom/index.js 的依赖图，得到 react 项目中实际用到的 package
```bash
➜  react git:(18.2.0) ✗ madge --json packages/react/index.js packages/react-dom/index.js > deps.json           
➜  react git:(18.2.0) ✗ jq -r 'to_entries[] | .key, (.value[])' deps.json | cut -d '/' -f 1 | sort -u
react
react-dom
react-reconciler
scheduler
shared
➜  react git:(18.2.0) ✗ 
```
每个目录的作用大致为：
```
react: 用于暴露 hooks 和主要 API
react-dom: 包括了 client 和 server 两个部分，主要是用于 Fiber 和 Render 操作
react-reconciler：协调器，用于分配 React 任务，确定权重、优先级等
scheduler：React 所有任务（render、update、event...）调度
shared: 模块公用的方法和全局变量
```

## 本地 Debug 环境搭建
React 虽然是 js 项目，但代码中有 type 声明语句，这些声明在编译时通过`@babel/plugin-transform-flow-strip-types`插件移除。所以如果要 debug 源码，要么使用 react 完整编译产物 + sourcemap 调试，要么 include react 项目并且在构建配置里加入 react 的编译配置。

基于调试成本考虑，使用 react 完整编译产物比较合适。

操作步骤如下：

1. clone react 仓库到本地，monorepo 还是比较大的，浅克隆后切换 head 到目标版本即可，由于我部门用的 react 18.2，所以我主要想看 18.2 的源码
```bash
git clone https://github.com/facebook/react.git --depth 1

git checkout -b v18.2.0 origin 9e3b772b8cabbd8cadc7522ebe3dde3279e79d9e

# 安装依赖
cd react && yarn
```
2. 从上面的产物分析中我们知道 React 主要用到的产物，除了 share 作为工具包没有单独的入口，其余 packages 都需要编译
```bash
yarn build react/index,react/jsx,react-dom/index,scheduler --type=NODE

yarn link

# yarn 会根据 packages 把这两个包注册到全局，可以看到以下输出
yarn link v1.22.22
success Using linked package for "react".
success Using linked package for "react-dom".
Done in 0.02s.
```

3. 如果想进一步了解每个函数都在源码中的哪个文件下，可以修改构建配置生成 sourcemap
- 修改 scripts/rollup/build.js 配置，把 sourcemap 改为 true
- 修改后会编译失败，因为有部分插件没有 sourcemap，可以根据报错逐个注释。我遇到的有: `closure` `prettier` `stripUnusedImports` `renderChunk`
- 回到自己要 debug 的 react 应用中，执行`yarn link react react-dom`把 node_modules 里的 react 和 react-dom 软链到全局目录下。可以通过 `ls -l node_modules/react` 检查是否连接成功
```bash
➜  my-app git:(master) ✗ ls -l node_modules/react
lrwxrwxrwx 1 root root 51 May  3 17:59 node_modules/react -> ../../../../usr/local/share/.config/yarn/link/react
```
- 配置 React App 的构建项，把 react 和 react-dom external 出去，然后给 react.develement.js 和 react-dom.develement.js 以及对应的 sourcemap 提供对应的静态服务（可以复制到项目下直接复用 dev server，也可以在 react/build/node_modules 目录下 通过 http-server 快速创建）

于是我们就可以在控制台文件级别的 debug 了
![react-debug-0](/react-debug-0.png)

- 如果需要进一步在 vscode 中调试，可以编辑 .vscode/launch.json 文件指向 React App 的运行端口
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Chrome",
            "request": "launch",
            "type": "chrome",
            "url": "http://localhost:5173",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```
![react-debug-0](/react-debug-1.png)