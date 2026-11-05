import { NextResponse, type NextRequest } from "next/server"

/**
 * English is served at "/" (rewritten to the /en route) and Spanish at "/es".
 * "/en" itself redirects to "/" so each page has a single public URL.
 */
export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    if (url.pathname === "/en") {
        url.pathname = "/"
        return NextResponse.redirect(url, 308)
    }
    if (url.pathname === "/") {
        url.pathname = "/en"
        return NextResponse.rewrite(url)
    }
    return NextResponse.next()
}

export const config = { matcher: ["/", "/en"] }
