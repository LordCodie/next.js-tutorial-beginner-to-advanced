"use client"

import { notFound } from "next/navigation" 

function getRandomInt(count) {
    return Math.floor(Math.random() * count)
}

export default function ReviewDetails({ params }) {

    if(parseInt(params.reviewId) > 1000) {
        notFound()
    }

    const random = getRandomInt(2)

    if (random === 1) {
        throw new Error("Error laoding review")
    } 

    return (
        <>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </>
    )
}