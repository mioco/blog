import Link from 'next/link';
import { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8">
      <header>
        <nav className="py-4 lg:w-[80%] lg:mx-auto">
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
      <main className="flex-grow py-8 lg:w-[80%] lg:mx-auto">{children}</main>
      <footer className="py-8 mx-auto">
        <div className="max-w-4xl px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© Copyright {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
} 