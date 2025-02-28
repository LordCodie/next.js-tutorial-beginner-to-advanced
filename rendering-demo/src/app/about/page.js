import { cookies } from "next/headers"

export default async function AboutPage(){
    console.log("About server component")

    const cookieStore = await cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)

    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}