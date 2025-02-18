import { comments } from "./data"

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")
    const filteredComment = query ?
        comments.filter(comment => comment.text.includes(query)) :
        comments
    return Response.json(filteredComment)
}

export async function POST(request) {
    const commentBody = await request.json()
    const newComment = {
        id: comments.length + 1,
        text: commentBody.text
    }
    comments.push(newComment)
    return new Response(
        JSON.stringify(comments),
        {
            headers: {
                "Content-Type": "application/json"
            },
            status: 201
        }
    )
}