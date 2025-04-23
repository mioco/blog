'use client'
import { useEffect, useRef } from 'react';

export const Giscus = () => {
  const scriptRef = useRef<HTMLScriptElement>();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.dataset.repo = 'mioco/simple-blog';
    script.dataset.repoId = 'R_kgDOOb3uZg';
    script.dataset.category = 'Announcements';
    script.dataset.categoryId = 'DIC_kwDOOb3uZs4CpUA4';
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '0';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '1';
    script.dataset.inputPosition = 'buttom';
    script.dataset.lang = 'zh-CN';
    script.crossOrigin = 'anonymous';
    script.dataset.theme = 'dark';
    scriptRef.current = script;
    const container = document.body;
    container.appendChild(script);

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, []);

  return null;
};
