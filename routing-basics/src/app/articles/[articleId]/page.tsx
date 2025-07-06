import Link from "next/link";

// Here dynamic route parameters and search parameters are used.
// Async await is used in server components to get the values of the parameters.
// In client components, we can use `use` hooks from `react`, 
// In Client, we can access by const { articleId } = use (params);
// In page.tsx, we can access both params and searchParams.
// But in layout.tsx, we can only access params.

export default async function ArticlePage({params, searchParams}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1 className="text-2xl">Article Page</h1>
      <h4 className="text-lg">News article {articleId}</h4>
      <p>Reading in {lang}</p>

      <div className="flex gap-4 text-lime-700 font-semibold">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}