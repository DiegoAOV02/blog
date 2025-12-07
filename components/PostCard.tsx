"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Post } from "@/lib/posts";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-900/60 p-5 rounded-lg shadow-md border border-white/5"
    >
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold pr-4">{post.title}</h2>
          {post.publishedAt && (
            <p className="text-xs text-gray-500 whitespace-nowrap">
              {post.publishedAt}
            </p>
          )}
        </div>
        <p className="text-sm text-gray-400">{post.excerpt}</p>
      </Link>
    </motion.div>
  );
}
