"use client"

import { createContext, useContext } from "react";

const defaultTheme = {
    primary: "blue",
    secondary: "red"
}

const ThemeContext = createContext(defaultTheme)

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)