import "server-only"

export const ServerSideFunction = () => {
    console.log(
        `
        use muliple libraries,
            use environment variables,
            interact with a database,
            process confidential information
        `
    )
    return "server result"
}