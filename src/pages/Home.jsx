import React, { useContext } from 'react'
import { Navbar } from '../component/Navbar'
import { Location } from '../component/Location'
import { Context } from '../Context'
import { Designyour } from '../component/Designyour'

export const Home = () => {
  const { darkTheme } = useContext(Context)
  return (
    <div className={darkTheme ? "dark flex flex-col bg-[#0F0F13]  min-h-screen" : ' page flex flex-col  min-h-screen bg-gradient-to-tr  from-sky-200  to-emerald-200  '}>
      <div className=''>
        <Navbar label="Login" />
      </div>
      <div className=''>
        <Location />
        <Designyour />
      </div>
    </div>
  )
}
