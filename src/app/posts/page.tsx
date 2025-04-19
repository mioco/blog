import { getAllPostsMetadata, getAllTags } from '@/lib/markdown';
import PostCard from '@/components/PostCard';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { TagsAside } from '@/components/TagsAside';

export function generateStaticParams() {
  return getAllTags().map(tag => ({ tag }));
}

export default function PostsPage({
  params,
}: {
  params: { tag?: string };
}) {
  const selectedTag = params.tag;
  const allPosts = getAllPostsMetadata();
  const allTags = getAllTags();

  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

  return (
    <Layout>
      <div className="flex gap-8">
        <TagsAside selectedTag={selectedTag} allTags={allTags} />

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">
            {selectedTag ? `Posts tagged with "${selectedTag}"` : 'All Posts'}
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