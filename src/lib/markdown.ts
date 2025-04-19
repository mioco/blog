import { Post } from '@/types/post';
import postsData from '@/data/posts.json';

export function getAllPostIds() {
  return postsData.map((post: Post) => ({ id: post.id }));
}

export function getPostData(id: string): Post {
  const post = postsData.find((p) => p.id === id);
  if (!post) throw new Error('Post not found');
  return post;
}

export function getAllPostsMetadata(): Post[] {
  return postsData;
}

export function getPostById(id: string): Post | undefined {
  return postsData.find((post: Post) => post.id === id);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  postsData.forEach((post: Post) => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
} 