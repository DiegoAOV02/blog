// app/page.tsx

/**
 * Main homepage component, this is where visitors land first.
 * The content here introduces the blog and its author.
 * 
 */

export default function Home() {
  return (
    <div className="pt-16 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog!</h1>
      <p className="text-lg text-gray-300 mb-8">
        Hi, I&apos;m Diego Ortiz. This space is where I share my thoughts on development, technology, advices, videogames, and more.
      </p>
    </div>
  );
}
