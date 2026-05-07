import fs from "fs";
import path from "path";

export type Section = { heading?: string; body: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: Section[];
};

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"));
  return files
    .map((f) => JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), "utf-8")) as Post)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const posts = getAllPosts();

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
