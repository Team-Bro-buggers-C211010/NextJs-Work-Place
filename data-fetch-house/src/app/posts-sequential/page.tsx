import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filterPosts = posts.filter((post) => post.id % 10 === 1);
  // console.log("Filtered Posts:", filterPosts);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filterPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg shadow-amber-100 transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
            <Suspense
              fallback={
                <div className="text-sm text-gray-500">Loading author...</div>
              }
            >
              <Author userId={post.userId} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
