import React from 'react'
import group from "../assets/group.svg"
import dark from "../assets/group_dark.png"
import { Link } from 'react-router-dom'

export const Registerc = () => {
  
  return (
    <div className='font-sans flex justify-center items-center w-full h-full'>
      <div className='flex w-full h-full flex-col justify-center items-center  md:w-3/4 lg:w-2/5  mb-[5%] md:mb-[2%]'>
      <div className='my-[10%] md:my-[2%] min-h-[10rem]'>
<img src={group} alt="" className='w-[10rem] md:w-[150px] opacity-100 dark:invisible dark:w-0' />
<img src={dark} alt="" className='w-0 dark:w-[10rem] md:dark:w-[150px] opacity-100 invisible dark:visible ' />
</div>
        <div className='w-full px-[4%] my-[10%] md:my-0 flex flex-col justify-center'>
        <h2 className='my-[5%] md:my-[2%] text-left font-bold start text-gray-900 w-full py-[3%] text-2xl md:text-4xl dark:bg-blue-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-[#21E535]   dark:bg-clip-text dark:text-transparent md:text-center'>Start your journey with us</h2>
        <div className='my-[2%]'>
            <input type="text" name="" id="" placeholder='Enter name ' className='md:text-lg rounded-xl border-2  border-gray-500 h-[3rem]  w-full py-[1%] px-[3%] dark:border-white dark:bg-black  dark:placeholder:text-white' />
            <input type="text" name="" id="" placeholder='Enter email' className='md:text-lg rounded-xl border-2 mt-[4%] border-gray-500  h-[3rem] w-full py-[1%] px-[3%] dark:border-white dark:bg-black  dark:placeholder:text-white' />
            <input type="text" name="" id="" placeholder='Enter number' className='md:text-lg rounded-xl border-2 mt-[4%] border-gray-500 h-[3rem]  w-full py-[1%] px-[3%] dark:border-white dark:bg-black  dark:placeholder:text-white' />
            <input type="text" name="" id="" placeholder='Enter password' className='md:text-lg rounded-xl border-2 mt-[4%] border-gray-500 h-[3rem]  w-full py-[1%] px-[3%] dark:border-white dark:bg-black  dark:placeholder:text-white' />
          </div>
        
        <button className='w-full my-[2%] bg-[#21E535]  dark:bg-blue-500 dark:bg-gradient-to-br  dark:from-blue-500 dark:to-[#21E535] py-[2%] text-white rounded-lg font-bold  leading-7 text-xl md:text-2xl'>Sign up</button>

        
        <div className='text-center text-lg   text-gray-500 font-bold dark:text-gray-200 my-[2%]'> Already have an account? <span className='text-gray-800 font-bold transition-all ease-in hover:text-teal-700 hover:tracking-widest dark:text-green-400'>
          <Link to="/">
          Login
          </Link>
        </span></div>
        </div>
      </div>
    </div>
  )
}