import { Post, PostMetadata } from '@/types/post';
import postsData from '@/data/posts.json';

export function getAllPostIds() {
  return postsData.map((post: PostMetadata) => ({ id: post.id }));
}

export function getPostData(id: string): PostMetadata {
  const post = postsData.find((p) => p.id === id);
  if (!post) throw new Error('Post not found');
  return post;
}

export function getAllPostsMetadata(): PostMetadata[] {
  return postsData;
}

export function getPostById(id: string): PostMetadata | undefined {
  return postsData.find((post: PostMetadata) => post.id === id);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  postsData.forEach((post: PostMetadata) => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
} 