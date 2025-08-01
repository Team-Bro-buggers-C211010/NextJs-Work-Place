type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch author");
  }
  const author: Author = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written by:{" "}
      <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
        {author.name}
      </span>
    </div>
  );
}
