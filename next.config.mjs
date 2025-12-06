/**
 * This file configures Next.js settings for the project.
 * It enables experimental support for MDX using the Rust-based compiler.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
