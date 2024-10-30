export const generateMetadata = async ({ params }) => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Attempt ${params.productId}`)
        }, 10)
    })
    return {
        title: `${title}`
    }
}


export default function ProductDetails({ params }) {
    return <h1>Details about product {params.productId}</h1>
}