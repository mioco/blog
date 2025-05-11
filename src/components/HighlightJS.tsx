'use client'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/github-dark-dimmed.min.css';
import { useEffect } from 'react';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);
hljs.registerLanguage('python', python);

export const HighlightJS = () => {
  useEffect(() => {
    document.querySelectorAll('code')?.forEach(el => {
        hljs.highlightElement(el);
    })
  }, []);

  return null;
};
