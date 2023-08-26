import React, { useContext } from 'react'
import { Navbar } from '../component/Navbar'
import { Location } from '../component/Location'
import { Context } from '../Context'
import { Designyour } from '../component/Designyour'
import { Designforgroup } from '../component/Designforgroup'
import { useLocation } from 'react-router-dom'

export const DesignGroup = () => {
    let { state } = useLocation();
  return (
    <div className=' page flex flex-col  min-h-screen '>
      <div className=''>
        <Navbar label="Login" />
      </div>
      <div className=''>
        <Location />
        <Designforgroup  state={state}/>
      </div>
    </div>
  )
}
