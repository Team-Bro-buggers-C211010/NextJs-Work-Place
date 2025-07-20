export default async  function ProductPage({ params }: {params: Promise<{ id: string }>} ) {
    const { id } = await params;

    console.log(`Product page for product ID: ${id}`);
    
    return (
        <div>
            <p>Details for product ID: {id}</p>
        </div>
    );
}