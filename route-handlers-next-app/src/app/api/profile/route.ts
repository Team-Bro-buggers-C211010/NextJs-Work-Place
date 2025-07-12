import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    // first way to get cookies
    const theme = request.cookies.get("theme");
    console.log("Theme from cookies:", theme);

    // second way to set, and get cookies
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "10");
    console.log("Results per page from cookies:", cookieStore.get("resultsPerPage"));

    return new Response("<h1>Hello from GET in profile route</h1>", {
        headers: {
            "Content-Type": "text/html",
            // (first approach) Example of setting a cookie in the response
            "Set-Cookie": "theme=dark"
        }
    });
}