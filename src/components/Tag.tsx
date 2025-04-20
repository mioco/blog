import Link from 'next/link';

interface TagProps {
  tag: string;
  href?: string;
  className?: string;
}

export const Tag = ({ tag, href = `/posts/${tag}`, className = '' }: TagProps) => {
  return (
    <Link
      href={href}
      className={`px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${className}`}
    >
      {tag}
    </Link>
  );
}; 