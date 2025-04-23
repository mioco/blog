import { getPostData, getAllPostIds } from '@/lib/markdown';
import Layout from '@/components/Layout';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { TagList } from '@/components/TagList';
import { Giscus } from '@/components/Giscus';
import { HighlightJS } from '@/components/HighlightJS';

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
        <HighlightJS />
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <TagList tags={post.tags} />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{post.wordCount} words</span>
              <span>Updated: {format(new Date(post.updatedAt), 'MMM d, yyyy')}</span>
            </div>
          </header>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <section className="mt-12 pt-8 border-t giscus">
            <Giscus />
          </section>
        </article>
      </Layout>
    );
  } catch (error) {
    notFound();
  }
} 