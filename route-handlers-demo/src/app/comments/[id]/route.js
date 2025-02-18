import { redirect } from "next/navigation"
import { comments } from "../data"

export async function GET(_request, { params }) {
    if (parseInt(params.id) > comments.length) {
        redirect('/comments')
    }
    const findComment = comments.find(comment => comment.id === parseInt(params.id))
    return Response.json(findComment)
}

export async function PATCH(request, { params }) {
    const body = await request.json()
    const { text } = body
    const index = comments.findIndex(comment => comment.id === parseInt(params.id))
    comments[index].text = text
    return Response.json(comments[index])
}

export async function DELETE(_request, { params }) {
    const index = comments.findIndex(comment => comment.id === parseInt(params.id))
    const deletedComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deletedComment)
}