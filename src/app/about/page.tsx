import Layout from '@/components/Layout';
import { Profile } from '@/components/Profile';

export default function AboutPage() {
  return (
    <Layout>
      <Profile />

      <section className="prose max-w-none">
        <h2>About Me</h2>
        <p>
          Write a detailed introduction about yourself here. You can include your
          background, interests, and what you do.
        </p>

        <h2>Contact</h2>
        <ul>
          <li>Email: osyo1997@outlook.com</li>
          <li>GitHub: github.com/mioco</li>
        </ul>
      </section>
    </Layout>
  );
} 