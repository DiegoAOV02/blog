// app/page.tsx

/**
 * Main homepage component, this is where visitors land first.
 * The content here introduces the blog and its author.
 */

import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16 max-w-4xl mx-auto space-y-8 px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog!</h1>
      <p className="text-lg text-gray-300 mb-8">
        Hi, I&apos;m Diego Ortiz. This space is where I share my thoughts on
        development, technology, advices, videogames, and more.
      </p>
      <div className="flex center justify-center">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGU4dG5mdzlmdjY5aHN6cjl5eDl3bHdjajlwMTM3aGNhbGxodXRsZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ifBColYSQBYy99Dldd/giphy.gif"
          alt="Welcome animation"
          width={200}
          height={300}
          unoptimized
        />
      </div>
    </div>
  );
}
