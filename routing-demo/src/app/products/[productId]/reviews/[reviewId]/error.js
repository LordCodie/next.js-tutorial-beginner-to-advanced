"use client"

export default function ErrorBoundary({ error, reset }) {
    return <div>
        {error.message}
        <button onClick={reset}>Try again</button>
    </div>
}