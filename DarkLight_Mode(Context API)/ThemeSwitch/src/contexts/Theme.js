import { createContext, useContext } from "react";



export const ThemeContext =createContext({
    themeMode:"light",
    darktheme:()=>{},
    lightTheme:()=>{},

})

export const Themeprovider = ThemeContext.Provider

export default function useTheme (){
    return useContext(ThemeContext)
}