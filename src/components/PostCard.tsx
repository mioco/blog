import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '@/types/post';
import { TagList } from './TagList';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="mb-8 rounded-lg">
      <Link href={`/post/${post.id}`}>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">{post.title}</h2>
      </Link>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{post.wordCount} words</span>
        {Boolean(post.updatedAt || post.date) && <span>Updated: {format(new Date(post.updatedAt || post.date), 'MMM d, yyyy')}</span>}
      </div>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <TagList tags={post.tags} />
    </article>
  );
} 