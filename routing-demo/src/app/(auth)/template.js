"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css"

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
    const pathname = usePathname()
    const [input, setInput] = useState("")
    return (
        <div>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)} />
            </div>
            <div>
                {navLinks.map((link) => {
                    const isAlive = pathname.startsWith(link.href)
                    return (
                        <>
                            <br />
                            <Link
                                href={link.href}
                                key={link.name}
                                className={isAlive ?
                                    "font-bold mr-4" : "text-blue-500 mr-4"}
                            >
                                {link.name}
                            </Link>
                            <br />
                            <br />
                        </>
                    )
                })}
                {children}
            </div>
        </div>
    );
};