import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-16 max-w-4xl mx-auto space-y-8 px-6">
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
