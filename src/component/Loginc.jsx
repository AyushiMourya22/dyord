import React, { useContext, useState } from 'react'
import group from "../assets/group.svg"
import dark from "../assets/group_dark.png"
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import Cookies from "js-cookie"
import { toast } from 'react-toastify'

export const Loginc = () => {
  const { setUser } = useContext(Context)
  const navigate = useNavigate()

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const handleSubmit = async () => {
    try{console.log(email,password)
      if(email===""){
        throw Error ("Enter email")
      }
    setUser("Ayushi")
    Cookies.set("User","Ayushi")
    Cookies.set("Id",1)
    navigate("/home")}
      catch(e){
        toast.error(e)
      }
  }

  return (
    <div className='font-sans px-3 flex justify-center items-center w-full h-full'>
      <div className='flex w-full h-full  flex-col justify-center items-center rounded-2xl   md:w-3/4 lg:w-2/5  mb-[5%] md:mb-[2%]'>
        <div className='my-[10%] md:my-[2%] min-h-[10rem]'>
          <img src={group} alt="" className='w-[10rem] md:w-[150px] opacity-100 dark:invisible dark:w-0' />
          <img src={dark} alt="" className='w-0 dark:w-[10rem] md:dark:w-[150px] opacity-100 invisible dark:visible ' />
        </div>
        <div className='w-full px-[4%] my-[10%] md:my-0 flex flex-col justify-center'>
          <h2 className='my-[5%] md:my-[0%] text-left font-bold start text-[#3B3B3B] w-full py-[3%] text-2xl md:text-3xl dark:bg-blue-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-[#21E535]   dark:bg-clip-text dark:text-transparent md:text-center'>Start your journey with us</h2>
          <div className='my-[2%]'>
            <input type="text" required onChange={(e)=>setEmail(e.target.value)} name="" id="" placeholder='Enter email or number' className='md:text-lg rounded-xl border-2  border-black h-[3rem]  w-full py-[1%] px-[3%] bg-inherit dark:border-white dark:bg-black  placeholder:text-[#545151]' />
            <input type="text" required onChange={(e)=>setPassword(e.target.value)} name="" id="" placeholder='Enter password' className='md:text-lg rounded-xl border-2 mt-[6%] md:mt-[3%] border-black h-[3rem]  w-full py-[1%] px-[3%] bg-inherit dark:border-white dark:bg-black  placeholder:text-[#545151]' />
          </div>
          <div className='my-[4%] lg:my-3 text-lg   text-right  w-full text-gray-600 dark:text-white'>Forgot Password?</div>

          <button onClick={handleSubmit} className='w-full my-[2%] bg-[#21E535]  dark:bg-blue-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-[#21E535] py-[2%] text-white rounded-lg font-bold  leading-7 text-xl md:text-2xl' >Login</button>

          {/* <div className='flex text-gray-600 justify-between items-center my-[4%] md:my-3'>
          <div className='border-t-2 border-gray-600 w-[30%]'> </div>
          <div className='dark:text-white text-lg '>Or Login with  </div>
          <div className='border-t-2 border-gray-600 w-[30%]'></div>
        </div>
        <div className="text-center my-[5%]  text-xl font-bold">
          GOOGLE
        </div> */}
          <div className='text-center text-lg   text-gray-500 font-bold dark:text-gray-200 my-[2%]'> You don't have an account? <span className='text-gray-800 font-bold transition-all ease-in hover:text-teal-700 hover:tracking-widest dark:text-green-400'>
            <Link to="/register">
              Sign up
            </Link>
          </span></div>
        </div>
      </div>
    </div>
  )
}
