import { getPostData, getAllPostIds } from '@/lib/markdown';
import Layout from '@/components/Layout';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Disqus } from '@/components/Disqus';
import { TagList } from '@/components/TagList';

export function generateStaticParams() {
  return getAllPostIds();
}

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  try {
    const post = getPostData(params.id);

    return (
      <Layout>
        <article className="max-w-2xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <TagList tags={post.tags} />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{post.wordCount} words</span>
              <span>{post.readingTime} min read</span>
              <span>Updated: {format(new Date(post.updatedAt), 'MMM d, yyyy')}</span>
            </div>
          </header>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.date }}
          />

          <section className="mt-12 pt-8 border-t">
            <Disqus shortname="osyos-blog" identifier={post.id} title={post.title} />
          </section>
        </article>
      </Layout>
    );
  } catch (error) {
    notFound();
  }
} 