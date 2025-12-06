// components/Header.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const nameTitle = "Diego Ortiz";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full backdrop-blur bg-black/20 border-b border-white/10 z-50"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          {nameTitle}
        </Link>
      </div>
    </motion.header>
  );
}
