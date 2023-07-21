import React, { useContext } from 'react'
import { Context } from '../Context'
import { Loginc } from '../component/Loginc'
import { Navbar } from '../component/Navbar'
import { Registerc } from '../component/Registerc'
export const Register = () => {
    const {darkTheme}=useContext(Context)
    return (
        // <div className="h-[100vh]" style={{ backgroundImage: `url(${bg1})`, objectFit: 'cover', width:"100%"}}>
        <div className={darkTheme?"dark  bg-[#0F0F13]  min-h-screen":'min-h-screen bg-gradient-to-tr  from-sky-200  to-emerald-200  '}>
            <Navbar label="Register"/>
            <Registerc/>
        </div>
    )
}
