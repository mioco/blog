import Link from 'next/link';
import { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header>
        <nav className="w-[80%] max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <Link href="/posts" className="hover:text-blue-600 dark:hover:text-blue-400">
                Posts
              </Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow w-[80%] max-w-4xl mx-auto px-4 py-8">{children}</main>
      <footer className="py-8">
        <div className="w-[80%] max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© Copyright {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
} 