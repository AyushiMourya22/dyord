import React, { useContext } from 'react'
import { Context } from '../Context'
import { Loginc } from '../component/Loginc'
import { Navbar } from '../component/Navbar'
export const Login = () => {
    const {darkTheme}=useContext(Context)
    return (
        // <div className="h-[100vh]" style={{ backgroundImage: `url(${bg1})`, objectFit: 'cover', width:"100%"}}>
        <div className={darkTheme?"dark flex flex-col bg-[#0F0F13]  min-h-screen":' page flex flex-col  min-h-screen bg-gradient-to-tr  from-sky-200  to-emerald-200  '}>
           <div className='flex-1'>
            <Navbar label="Login"/>
           </div>
           <div className='flex-1'>
            <Loginc/>

           </div>
        </div>
    )
}
