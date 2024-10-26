"use client" 

export default function ErrorBoundary({error, reset}) {
    return <div>{error.message} <br /> <button onClick={reset}>Try Again</button> <br /></div>
}