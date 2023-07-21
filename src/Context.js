import { createContext, useState } from "react";

export const Context=createContext({})


export function ContextProvider({children}){
    const [darkTheme,setDarkTheme]=useState(true)
    
    return(
        <Context.Provider value={{darkTheme,setDarkTheme}}>
            {children}
        </Context.Provider>
    )
}