'use client'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-dark-dimmed.min.css';
import { useEffect } from 'react';

hljs.registerLanguage('javascript', javascript);

export const HighlightJS = () => {

  useEffect(() => {
    document.querySelectorAll('code')?.forEach(el => {
        hljs.highlightElement(el);
    })
  }, []);

  return null;
};
