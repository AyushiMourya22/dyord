import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../component/Navbar'

import { useLocation } from 'react-router-dom'
import { MdLocationPin } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { BiTimeFive } from 'react-icons/bi'

export const History = () => {
    const data=[  {
      "creator": 1,
      "subject": "Sample Plan",
      "source": "New York",
      "destination": [
        "Los Angeles",
        "San Francisco"
      ],
      "startTime": "10:00:00",
      "endTime": "18:00:00",
      "startDate": "2023-08-10",
      "endDate": "2023-08-15",
      "purpose": "Vacation"
    },
    {
      "creator": 1,
      "subject": "Sample Plan",
      "source": "New York",
      "destination": [
        "Las vegas",
        "New Delhi"
      ],
      "startTime": "10:00:00",
      "endTime": "18:00:00",
      "startDate": "2023-08-10",
      "endDate": "2023-08-15",
      "purpose": "Vacation"
    },
    {
      "creator": 1,
      "subject": "Sample Plan",
      "source": "Sample Source",
      "destination": [
        "Destination 1",
        "Destination 2"
      ],
      "startTime": "12:00:00",
      "endTime": "14:00:00",
      "startDate": "2023-08-01",
      "endDate": "2023-08-02",
      "purpose": "Sample Purpose"
    },
    {
      "creator": 1,
      "subject": "Sample Plan",
      "source": "Sample Source",
      "destination": [
        "Destination 1",
        "Destination 2"
      ],
      "startTime": "12:00:00",
      "endTime": "14:00:00",
      "startDate": "2023-08-01",
      "endDate": "2023-08-02",
      "purpose": "Sample Purpose"
    }
  ]
    const dataOthers=[  {
      "creator": 1,
      "subject": "Sample Plan",
      "source": "New York",
      "destination": [
        "Los Angeles",
        "San Francisco"
      ],
      "startTime": "10:00:00",
      "endTime": "18:00:00",
      "startDate": "2023-08-10",
      "endDate": "2023-08-15",
      "purpose": "Vacation"
    },
    {
      "creator": 1,
      "subject": "Sample Plan",
      "source": "New York",
      "destination": [
        "Las vegas",
        "New Delhi"
      ],
      "startTime": "10:00:00",
      "endTime": "18:00:00",
      "startDate": "2023-08-10",
      "endDate": "2023-08-15",
      "purpose": "Vacation"
    },
    {
      "creator": 1,
      "subject": "Sample Plan",
      "source": "Sample Source",
      "destination": [
        "Destination 1",
        "Destination 2"
      ],
      "startTime": "12:00:00",
      "endTime": "14:00:00",
      "startDate": "2023-08-01",
      "endDate": "2023-08-02",
      "purpose": "Sample Purpose"
    },
  ]

    let { state } = useLocation();
    const [actual,setActual]=useState(data)
    const [filter,setFilter]=useState("default")

    useEffect(()=>{
      console.log(filter)
      if(filter==="default"){
        setActual(data)
      }
      if(filter==="others"){
        setActual(dataOthers)
      }
      if(filter==="group"){
        setActual(data)
      }
    },[filter])
  return (
    <div className=' page flex flex-col  min-h-screen '>
      <div className=''>
        <Navbar label="Login" />
      </div>
      <div className='flex justify-center items-center my-5'>
        <div className='flex flex-col w-4/5 bg-white p-4 rounded-lg'>
            <div className='flex justify-between items-center text-xs sm:text-base md:text-xl text-center'>
                <button className='w-1/4 hover:bg-gray-100 py-2 px-1 font-bold rounded-lg' onClick={e=>setFilter("default")}>My History</button>
                <button className='w-1/4 hover:bg-gray-100 py-2 px-1 font-bold rounded-lg' onClick={e=>setFilter("others")}>Designed for Others</button>
                <button className='w-1/4 hover:bg-gray-100 py-2 px-1 font-bold rounded-lg' onClick={e=>setFilter("group")}>Group History</button>
            </div>
            <div>
              <ul className=' px-2 md:px-6'>

              {actual.map(item=>{
                // const desti=""
                // item.destination.map(i=>desti+"->"+i)
                return(
                  <li className='px-2 my-10 text-gray-600 md:text-xl '>
                    <div className='flex my-2'>
                    <div className="w-[10%] lg:w-[4%] text-[#1061FF] "><MdLocationPin size={"1.5rem"} /></div>
                    <div className='font-bold '>{item.source +"-->" +item.destination}</div>
                    </div>
                    <div className='flex my-2'>
                    <div className="w-[10%] lg:w-[4%]  "><SlCalender  size={"1.25rem"} /></div>
                    <div className='text-base'>{"From "+ item.startDate +" To "+ item.endDate}</div>
                    </div>
                    <div className='flex my-2'>
                    <div className="w-[10%] lg:w-[4%]  "><BiTimeFive size={"1.25rem"} /></div>
                    <div className='text-base'>{item.startTime +" - "+ item.endTime}</div>
                    </div>
                    
                    
                  </li>
                  )
                })}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
