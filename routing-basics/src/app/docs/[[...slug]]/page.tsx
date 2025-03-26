// here [...slug] is a catch-all route that will match /docs, /docs/a, /docs/a/b, and so on.
// [[...slug]] is a nested route, which means that it can be nested inside other routes.
// The slug parameter is an array of strings, where each string is a part of the URL path.
export default async function Docs({ params }: 
    { params: Promise<{ slug: string[] }> }
) {
    const { slug } = await params;
    if(slug?.length === 2) {
        return (
            <div>
                <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
            </div>
        );
    }
    else if (slug?.length === 1) {
        return <h1>Viewing docs for feature {slug[0]}</h1> ;
    }
    
    return <h1>Docs home page</h1>
}