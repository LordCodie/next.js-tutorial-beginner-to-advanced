import { comments } from "../data"

export async function GET(_request, { params }) {
    const findComment = comments.find(comment => comment.id === parseInt(params.id))
    return Response.json(findComment)
}