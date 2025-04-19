import Link from 'next/link';
import { format } from 'date-fns';
import { PostMetadata } from '@/types/post';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="mb-8 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/post/${post.id}`}>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">{post.title}</h2>
      </Link>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{post.wordCount} words</span>
        <span>Updated: {format(new Date(post.updatedAt), 'MMM d, yyyy')}</span>
      </div>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/posts?tag=${tag}`}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {tag}
          </Link>
        ))}
      </div>
    </article>
  );
} 