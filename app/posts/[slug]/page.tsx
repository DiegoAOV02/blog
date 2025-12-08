// app/posts/[slug]/page.tsx

/**
 * Renders a single blog post page based on its slug.
 *
 * MDXRemote allows us to render markdown (.mdx) files as React components,
 * and "mdxComponents" lets us override how markdown elements (h1, p, code, etc.)
 * are displayed. This gives us full control over typography and styling.
 */

import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/**
 * mdxComponents:
 * This object maps Markdown/HTML tags to custom React components.
 * When MDXRemote renders markdown, it replaces default elements with these.
 *
 * Example:
 *   - "# Title" becomes our <h1> below with Tailwind styling.
 *   - Code blocks ``` become our <pre> with custom background.
 *   - Lists, links, images—all get upgraded styling.
 *
 * MDXRemoteProps["components"] is just the TypeScript type definition
 * for this mapping.
 */
const mdxComponents: MDXRemoteProps["components"] = {
  // Custom <h1> for MDX "# Title"
  h1: (props) => (
    <h1 {...props} className="text-4xl font-bold mt-8 mb-4 border-b border-white/10 pb-2" />
  ),

  // Custom <h2> for MDX "## Subtitle"
  h2: (props) => (
    <h2 {...props} className="text-3xl font-bold mt-8 mb-4 border-b border-white/10 pb-2" />
  ),

  h3: (props) => (
    <h3 {...props} className="text-2xl font-bold mt-6 mb-3" />
  ),
  h4: (props) => (
    <h4 {...props} className="text-xl font-bold mt-4 mb-2" />
  ),
  // Custom <p> for paragraphs
  p: (props) => (
    <p {...props} className="text-base leading-7 mb-4 text-slate-200" />
  ),

  // Code block (```js ...)
  pre: (props) => (
    <pre
      {...props}
      className={`overflow-x-auto rounded-lg bg-[#0d1a2d] border border-white/10 p-4 my-4 text-sm ${props.className ?? ""}`.trim()}
    />
  ),

  // Inline code (`code`)
  code: (props) => (
    <code
      {...props}
      className={`font-mono text-sm bg-[#0d1a2d] px-2 py-1 rounded ${props.className ?? ""}`.trim()}
    />
  ),

  // Links
  a: (props) => (
    <a
      {...props}
      className={`text-blue-400 hover:text-blue-300 underline ${props.className ?? ""}`.trim()}
    />
  ),

  // Unordered list
  ul: (props) => (
    <ul {...props} className="list-disc list-inside mb-4 space-y-2 ml-4" />
  ),

  // Ordered list
  ol: (props) => (
    <ol {...props} className="list-decimal list-inside mb-4 space-y-2 ml-4" />
  ),

  // List item
  li: (props) => (
    <li {...props} className="text-slate-200" />
  ),

  // Blockquotes ("> Something")
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-blue-400 pl-4 italic text-gray-400 my-4"
    />
  ),

  // Tables wrapper + table styling
  table: (props) => (
    <div className="overflow-x-auto my-4">
      <table {...props} className="w-full border-collapse text-sm" />
    </div>
  ),

  th: (props) => (
    <th
      {...props}
      className="border border-white/20 px-4 py-2 bg-[#0d1a2d] text-left font-bold"
    />
  ),

  td: (props) => (
    <td {...props} className="border border-white/20 px-4 py-2" />
  ),

  // Images
  img: (props) => (
    <img {...props} className="rounded-lg my-4 max-w-full h-auto" alt={props.alt as string ?? ""} />
  ),
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Extract slug from URL
  const { slug } = await params;

  // Retrieve markdown content + metadata
  const { meta, content } = getPostBySlug(slug);

  return (
    <article className="max-w-4xl mx-auto pt-16 px-6 pb-20">
      {/* Title from post metadata */}
      <h1 className="text-5xl font-bold mb-4 text-white">{meta.title}</h1>

      {/* Optional published date */}
      {meta.publishedAt && (
        <p className="text-gray-400 text-sm mb-8">Published on {meta.publishedAt}</p>
      )}

      {/* MDX content rendering */}
      <div className="prose prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={mdxComponents} // Apply custom MDX styling here
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm], // GitHub markdown support
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings], // Auto-id headings & links
            },
          }}
        />
      </div>
    </article>
  );
}
