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
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-sm text-gray-400 mt-2">{post.excerpt}</p>
      </Link>
    </motion.div>
  );
}
