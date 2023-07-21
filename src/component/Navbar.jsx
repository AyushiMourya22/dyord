import React, { useContext } from 'react'
import { Context } from '../Context'
import {FaRegUser, FaRegMoon, FaSun} from "react-icons/fa"

export const Navbar = ({label}) => {
    
  const {darkTheme,setDarkTheme}=useContext(Context)
    return (
        <div className={darkTheme?"dark ":''}>
            <div className='font-mono flex justify-between px-4 py-2 md:px-8 md:py-4  bg-gradient-to-b  from-sky-200  to-emerald-200 dark:bg-none dark:bg-[#0F0F13]' >
                <div  className=' flex justify-center items-center space-x-3'>
                    <div className='start font-bold text-2xl md:text-3xl  tracking-wider '> 
                    {label}
                    </div>
                    <div className=' w-5 md:w-7'>
                    <FaRegUser className='w-full h-full'/>

                    </div>
                </div>
                <button type='button' className='text-base md:text-xl px-2 py-1 dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full ' onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? <FaSun/> : <FaRegMoon/>}
                </button>
            </div>
        </div>
    )
}
