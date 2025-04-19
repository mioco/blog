/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 在构建完成后复制 CNAME 文件
  async afterBuild({ outDir }) {
    const fs = require('fs');
    const path = require('path');
    const cnamePath = path.join(process.cwd(), 'CNAME');
    const outCnamePath = path.join(outDir, 'CNAME');
    
    if (fs.existsSync(cnamePath)) {
      fs.copyFileSync(cnamePath, outCnamePath);
      console.log('CNAME file copied to build output');
    }
  },
};

module.exports = nextConfig; 