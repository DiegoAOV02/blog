// components/Header.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const nameTitle = "Diego Ortiz";
  const pathname = usePathname();

  /**
   * Navigation items for the header.
   * To add more items, simply extend this array.
   */
  const navItems = [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full backdrop-blur bg-black/20 border-b border-white/10 z-50"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Home link with my name that navigates to the homepage */}
        <Link
          href="/"
          className="text-lg font-semibold hover:text-blue-400 transition-colors"
        >
          {nameTitle}
        </Link>
        {/* Post navigation to the posts page. */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
