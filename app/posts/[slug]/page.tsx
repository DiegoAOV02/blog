// app/posts/[slug]/page.tsx

import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);

  return (
    <article className="prose prose-invert mx-auto pt-10">
      <h1 className="text-4xl font-bold">{meta.title}</h1>
      <MDXRemote 
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          }
        }}
      />
    </article>
  );
}
