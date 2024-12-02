import { Metadata } from "next"

export const generateMetadata = async ({ params }) => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Product Catalog No.${params.productId}`)
        }, 100)
    })
    return {
        title: `${title}`
    }
}

export default function ProductDetails({ params }) {
    return (
        <>
            <h1>Details about product {params.productId}</h1>
        </>
    )
}