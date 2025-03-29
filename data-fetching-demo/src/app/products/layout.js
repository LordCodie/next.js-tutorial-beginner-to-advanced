export default async function ProductsLayout({ children }) {
    // const response = await fetch("http://localhost:3001/products", {
    //     cache: 'force-cache'
    // })
    // const products = await response.json()
    // console.log({ products })
    return <>{children}</>
}