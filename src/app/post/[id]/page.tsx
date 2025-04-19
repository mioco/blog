import { getPostData, getAllPostIds } from '@/lib/markdown';
import Layout from '@/components/Layout';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/posts?tag=${tag}`}
                  className="px-2 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                >
                  {tag}
                </Link>
              ))}
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
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                Comments are coming soon! We're working on implementing a comment
                system.
              </p>
            </div>
          </section>
        </article>
      </Layout>
    );
  } catch (error) {
    notFound();
  }
} 