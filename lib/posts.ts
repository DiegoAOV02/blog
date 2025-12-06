import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_PATH);

  return files.map((file) => {
    const fullPath = path.join(POSTS_PATH, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    return { ...data, slug } as Post;
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  return { meta: data, content };
}

export interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  publishedAt?: string;
  categories?: string[];
}
