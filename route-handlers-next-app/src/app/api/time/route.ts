// Ensures the route is static
export const dynamic = "force-static"; 
export const revalidate = 10; // Optional: revalidate every 10 seconds

export const GET = async () => {
    return Response.json({ time: new Date().toLocaleTimeString() }, { status: 307 }); // Using 307 Temporary Redirect for route handlers
}