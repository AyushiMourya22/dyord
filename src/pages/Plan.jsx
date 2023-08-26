import React from 'react'
import { Navbar } from '../component/Navbar'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdLocationPin, MdStar } from 'react-icons/md';
import logo from "../assets/logosmall.png"
export const Plan = () => {
  const res = [
    {
      time: "09:30 AM",
      location: "Bus station",
      info: "500m away (35 min faster, charges 70rs)",
      transport: "www.google.com",
      food: "",
    },
    {
      time: "10:30 AM",
      location: "Varachha",

    },
    {
      time: "12:30 PM",
      info: "Want to have lunch here?",
      food: "www.google.com",
    },
    {
      time: "01:30 PM",
      info: "To reach Adajan, ola /uber might save your 1 hour and 30 minutes",
      transport: "www.google.com",
    },
    {
      time: "02:30 PM",
      location: "Adajan",

    },
    {
      time: "07:30 PM",
      info: "From the Sadar bridge, you will get many auto directed to Dindoli",
      transport: "www.google.com",
    },
    {
      time: "08:30 PM",
      location: "Dindoli",

    },
  ]
  return (
    <div className=' page flex flex-col  min-h-screen '>
      <div className=''>
        <Navbar />
      </div>
      <div className='px-2'>
        <div className='text-3xl py-2 px-2 md:text-center font-bold my-3'>Best design of your journey
        </div>
        <VerticalTimeline lineColor={"black"} layout='1-column-left'>
          {res.map((item) => {
            return (
              <VerticalTimelineElement
              contentArrowStyle={ {display:"none"} }
              contentStyle={ {background:"none", border:"none",boxShadow:"none" , padding:"0em"} }
                className="vertical-timeline-element--work  "
                date={item.time}
                iconStyle={{borderColor:"black",background:"black",boxShadow:"none",left:"7px", width:"25px",height:"25px" }}
                // icon={<MdStar />}
              >{item.location &&
                <h3 className="vertical-timeline-element-title flex ">
                  <div className=''><MdLocationPin className=" text-red-500" size={"1.4rem"} /></div>
                  <div className='font-bold text-[#1061FF]'>
                    {item.location}
                  </div>
                </h3>
                }
                {item.info&&
                <h4 className="vertical-timeline-element-subtitle flex space-x-2 md:space-x-0 items-center py-4">
                  <div className="w-[10%] md:w-[4%]">
                    <img src={logo} alt="" className='w-7'/>
                  </div>
                  <div className="w-[80%]">
                  {item.info}

                  </div>
                  </h4>
                }
                {item.food &&
                <div className='vertical-timeline-element-title flex justify-center items-center'>

                <button className='vertical-timeline-element-subtitle bg-[#21E535] rounded-xl font-bold text-center px-[5%]   p-[1%]  '>Order Food</button>
                </div >
                }
                {item.transport &&
                <div  className='vertical-timeline-element-title flex justify-center items-center'>

                <button className='vertical-timeline-element-subtitle bg-[#21E535]  rounded-xl font-bold  px-[5%]  p-[1%] ml-2 md:ml-0'  >Book Now</button>
                </div>
                }
              </VerticalTimelineElement>
            )
          })}


        </VerticalTimeline>

      </div>
      <button className='w-4/5 md:w-1/2 mx-auto my-[5%] md:my-[3%]  bg-[#21E535]   py-[1%] text-white rounded-lg font-bold  leading-7 text-xl md:text-2xl' >Confirm</button>
    </div>
  )
}
