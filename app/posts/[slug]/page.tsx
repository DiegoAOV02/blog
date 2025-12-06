// app/posts/[slug]/page.tsx
/**
 * The purpose of this file is to render individual blog posts based on their slug.
 * It fetches the post data using the slug parameter and displays the content
 * using MDXRemote for rendering MDX content with support for plugins.
 */

import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const mdxComponents: MDXRemoteProps["components"] = {
  // Pre: Corresponds to the <pre> tag in MDX content
  pre: (props) => (
    <pre
      {...props}
      className={`overflow-x-auto rounded-lg bg-[#0d1a2d] border border-white/10 p-4 text-sm ${props.className ?? ""}`.trim()}
    />
  ),
  code: (props) => (
    <code
      {...props}
      className={`font-mono text-sm ${props.className ?? ""}`.trim()}
    />
  ),
  a: (props) => (
    <a
      {...props}
      className={`text-blue-400 hover:text-blue-300 underline ${props.className ?? ""}`.trim()}
    />
  ),
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);

  return (
    <article className="prose prose-invert max-w-4xl mx-auto pt-16 px-6 prose-headings:text-slate-50 prose-p:text-slate-200 prose-a:text-blue-400 prose-code:text-blue-100 prose-pre:bg-[#0d1a2d] prose-pre:border-white/10 prose-pre:text-sm prose-img:rounded-lg">
      <h1 className="text-4xl font-bold mb-6">{meta.title}</h1>
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
      />
    </article>
  );
}
