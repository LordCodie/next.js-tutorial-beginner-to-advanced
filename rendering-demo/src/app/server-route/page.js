import { ClientSideFunction } from "@/utils/client-utils"
import { ServerSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage() {
    console.log("Server route rendered")

    const serverResult = ServerSideFunction()

    return (
        <div>
            <h1>Server Route Page</h1>
            <p>{serverResult}</p>
        </div>
    )
}