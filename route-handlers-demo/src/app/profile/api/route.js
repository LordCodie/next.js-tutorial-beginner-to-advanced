import { headers, cookies } from "next/headers"

export async function GET(request) {
    const requestHeaders = new Headers(request.headers)
    const headerList = await headers()

    const theme = request.cookies.get("theme")
    await cookies().set("resultsPerPage", "20")

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))

    console.log(theme)
    console.log(await cookies().get("resultsPerPage"))

    return new Response("<h1>Profile API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}