import { createContext, useState } from "react";

export const Context=createContext({})


export function ContextProvider({children}){
    const [darkTheme,setDarkTheme]=useState(false)
    const [user,setUser]=useState()
    
    return(
        <Context.Provider value={{darkTheme,setDarkTheme,user, setUser}}>
            {children}
        </Context.Provider>
    )
}