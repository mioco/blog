const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const remarkHtml = require('remark-html');
const remarkGfm = require('remark-gfm');
const { remark } = require('remark');

const postsDirectory = path.join(process.cwd(), 'content/posts');
const outputFile = path.join(process.cwd(), 'src/data/posts.json');

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function processPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const html = await remark()
      .use(remarkHtml.default)
      .use(remarkGfm.default)
      .process(content)

    return {
      id,
      title: data.title,
      date: data.date,
      updatedAt: data.updatedAt || data.date,
      tags: data.tags || [],
      excerpt: data.excerpt || content.slice(0, 200) + '...',
      content: String(html),
      wordCount: content.trim().split(/\s+/).length,
      readingTime: calculateReadingTime(content),
    };
  });

  // Sort posts by date
  const postList = (await Promise.all(posts)).sort((a, b) => new Date(b.date) - new Date(a.date));

  // Create output directory if it doesn't exist
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(postList, null, 2));
  console.log(`Generated ${postList.length} posts to ${outputFile}`);
}

processPosts(); 