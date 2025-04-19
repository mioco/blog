import { getAllPostsMetadata, getAllTags } from '@/lib/markdown';
import PostCard from '@/components/PostCard';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllTags().map(tag => ({ tag }));
}

export default function TagPage({
  params,
}: {
  params: { tag: string };
}) {
  const allPosts = getAllPostsMetadata();
  const allTags = getAllTags();
  
  if (!allTags.includes(params.tag)) {
    notFound();
  }

  const filteredPosts = allPosts.filter((post) => post.tags.includes(params.tag));

  return (
    <Layout>
      <div className="flex gap-8">
        <aside className="w-64">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="space-y-2">
            <Link
              href="/posts"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              All Posts
            </Link>
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/posts/${tag}`}
                className={`block px-3 py-2 rounded ${
                  params.tag === tag
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">
            Posts tagged with "{params.tag}"
          </h2>
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 