"use client"
import { notFound } from "next/navigation"

function getRandomInt(count) {
    return Math.floor(Math.random() * count)
}

export default function ReviewDetail({ params }) {
    const random = getRandomInt(2)

    if (random === 1) {
        throw new Error("Error loading review")
    }


    if (parseInt(params.reviewId) > 1000) {
        notFound();
    } else {
        return <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    }

}