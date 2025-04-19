import { getAllPostsMetadata } from '@/lib/markdown';
import PostCard from '@/components/PostCard';
import Layout from '@/components/Layout';
import { Profile } from '@/components/Profile';

export default function Home() {
  const posts = getAllPostsMetadata();
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof posts>);

  return (
    <Layout>
      <div className="">
        <Profile />
        <section>
          {Object.entries(postsByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, yearPosts]) => (
              <div key={year} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{year}</h3>
                <div className="space-y-6">
                  {yearPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            ))}
        </section>
      </div>
    </Layout>
  );
}
