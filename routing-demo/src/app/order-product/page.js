"use client"

import { useRouter } from "next/navigation"

export default function OrderProductPage() {
    const router = useRouter()

    const handleClick = () => {
        console.log('placing order...')
        router.replace('/')
    }

    return (
        <>
            <h1>Order product</h1>
            <br />
            <button onClick={handleClick}>Place order</button>
            <br />
            <br />
        </>
    )
}