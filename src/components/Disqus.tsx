'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    DISQUS?: any;
  }
}

interface DisqusProps {
  shortname: string;
  identifier: string;
  title: string;
}

export const Disqus = ({ shortname, identifier, title }: DisqusProps) => {
  const pathname = usePathname();

  useEffect(() => {
    // 加载 Disqus 脚本
    const script = document.createElement('script');
    script.src = `https://${shortname}.disqus.com/embed.js`;
    script.setAttribute('data-timestamp', Date.now().toString());
    script.async = true;
    document.body.appendChild(script);

    // 重置 Disqus
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = identifier;
          this.page.url = window.location.href;
          this.page.title = title;
        },
      });
    }

    return () => {
      // 清理脚本
      document.body.removeChild(script);
    };
  }, [pathname, shortname, identifier, title]);

  return (
    <div className="mt-8">
      <div id="disqus_thread" />
    </div>
  );
}; 