import { getAllPostsMetadata, getAllTags } from '@/lib/markdown';
import PostCard from '@/components/PostCard';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TagsAside } from '@/components/TagsAside';

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
        <TagsAside allTags={allTags} selectedTag={params.tag} />

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