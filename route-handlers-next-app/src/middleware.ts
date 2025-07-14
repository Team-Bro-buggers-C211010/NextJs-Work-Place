import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    // console.log(req.url)
    // return NextResponse.rewrite(new URL('/', req.url)); // redirect to home page but unchanged URL path "/api/profile"
    // return NextResponse.redirect(new URL("/", req.url)); // redirect to home page with changed URL path "/"

    const response = NextResponse.next();
    const themePreference = req.cookies.get("theme");
    if(!themePreference) {
        // Set a default theme cookie if it doesn't exist
        response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-header", "This is a custom header set by middleware");

    return response;
}

// export const config = {
//     matcher: "/api/profile"
// }