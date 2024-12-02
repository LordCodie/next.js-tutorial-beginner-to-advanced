"use client"

export default function ErrorBoundary({ error, reset }) {
    return (
        <div>
            {error.message}
            <br />
            <button onClick={reset}>Try</button>
        </div>
    )
}