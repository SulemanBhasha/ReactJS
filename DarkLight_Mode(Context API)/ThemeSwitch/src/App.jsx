import { useEffect, useState } from "react"
import useTheme, { Themeprovider } from "./contexts/Theme"
import ThemeButton from "./components/ThemeButton"
import Card from "./components/Crad"


function App() {
  const [themeMode,setThemeMode]  = useState("light")

  const lightTheme =()=>{
        setThemeMode("light")
  }
  const darktheme =()=>{
    setThemeMode("dark")
}
 useEffect(()=>{
   document.querySelector('html').classList.remove("light","dark")
   document.querySelector('html').classList.add(themeMode)
 },[themeMode])


 
  return (
    <Themeprovider value={{darktheme,lightTheme,themeMode}}>   
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         {/* Theme button */}
                         <ThemeButton></ThemeButton>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card></Card>
                    </div>
                </div>
            </div>
    </Themeprovider>  

  )
}

export default App
