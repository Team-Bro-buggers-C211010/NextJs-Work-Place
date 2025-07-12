// This ensures the route is always dynamic
export const dynamic = "force-dynamic";

export const GET = async () => {
    const categories = [
        { id: 1, name: "Technology" },
        { id: 2, name: "Health" },
        { id: 3, name: "Finance" },
        { id: 4, name: "Education" }
    ];

    return Response.json(categories, { status: 200 });
}