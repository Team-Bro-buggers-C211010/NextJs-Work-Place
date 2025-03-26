// here [...slug] is a catch-all route that will match /docs, /docs/a, /docs/a/b, and so on.
export default async function Docs({ params }: 
    { params: Promise<{ slug: string[] }> }
) {
    const { slug } = await params;
    return (
        <> 
            {
                slug.length === 2 ? <div>
                    <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
                </div> : <div>
                    <h1>Viewing docs for feature {slug[0]}</h1>
                </div>
            }
        </>
    );
}