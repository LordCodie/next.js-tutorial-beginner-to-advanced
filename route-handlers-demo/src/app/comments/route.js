import { comments } from "./data"

export async function GET() {
    return Response.json(comments)
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