import Layout from '@/components/Layout';
import { Profile } from '@/components/Profile';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Profile />

        <section className="prose max-w-none">
          <h2>About Me</h2>
          <p>
            Write a detailed introduction about yourself here. You can include your
            background, interests, and what you do.
          </p>

          <h2>Contact</h2>
          <ul>
            <li>Email: your.email@example.com</li>
            <li>GitHub: github.com/mioco</li>
            <li>Twitter: @yourusername</li>
            <li>LinkedIn: linkedin.com/in/yourusername</li>
          </ul>

          <h2>Skills</h2>
          <ul>
            <li>Web Development</li>
            <li>JavaScript/TypeScript</li>
            <li>React/Next.js</li>
            <li>And more...</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
} 