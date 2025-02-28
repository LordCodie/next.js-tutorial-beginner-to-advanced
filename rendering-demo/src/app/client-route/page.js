"use client"

import { useTheme } from "@/components/themeProvider"
import { ClientSideFunction } from "@/utils/client-utils"

export default function ClientRoutePage(){
    console.log("Client route rendered")

    const clientResult = ClientSideFunction()

    const { primary, secondary } = useTheme()
    const fontColor = { color: secondary }

    return (
        <div>
            <h1 style={fontColor}>Client Route Page</h1>
            <p>{clientResult}</p>
        </div>
    )
}