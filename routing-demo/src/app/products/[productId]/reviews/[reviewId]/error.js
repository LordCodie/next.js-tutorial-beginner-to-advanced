"use client"

export default function ErrorBoundary({ error, reset }) {
    return (
        <div>
            <h2>{error.message}</h2>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}