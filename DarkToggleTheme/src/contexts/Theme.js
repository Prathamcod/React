
import { useContext, createContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider
// Custoom Hooks       useTheme to access the element of useContext and CreateContext
export default function useTheme() {
    return useContext(ThemeContext)
}