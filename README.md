# My Blog

A static blog built with Next.js and deployed to GitHub Pages.

## Features

- Home page with recent posts grouped by year
- Post list with tag filtering and pagination
- Individual post pages with markdown support
- About page with personal information
- Responsive design
- Static site generation for fast loading

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding New Posts

1. Create a new markdown file in the `content/posts` directory
2. Add frontmatter to your post:
   ```markdown
   ---
   title: 'Your Post Title'
   date: 'YYYY-MM-DD'
   updatedAt: 'YYYY-MM-DD'
   tags: ['tag1', 'tag2']
   excerpt: 'A brief description of your post'
   wordCount: 500
   readingTime: 3
   ---
   ```
3. Write your post content in markdown
4. Build and deploy to GitHub Pages:
   ```bash
   npm run build
   npm run deploy
   ```

## Deployment

This blog is configured to deploy to GitHub Pages. To deploy:

1. Set up a GitHub repository
2. Update the `next.config.js` file with your repository name
3. Run:
   ```bash
   npm run build
   npm run deploy
   ```

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Markdown
- GitHub Pages
