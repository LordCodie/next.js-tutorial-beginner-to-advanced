function getRandomInt(count){
    return Math.floor(Math.random() * count)
}

export default function ProductDetailsLayout({ children }) {

    const random = getRandomInt(2)

    if(random === 1){
        throw new Error("Error loading product")
    }

    return (
        <div>
            {children}
            <h2>Featured products</h2>
        </div>
    )
}