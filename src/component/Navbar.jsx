import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import name1 from "../assets/name1.png"
import { FaRegMoon, FaSun, FaHistory } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiSettings, FiUserPlus } from "react-icons/fi"
import { MdDone, MdOutlineAccountCircle } from "react-icons/md"
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup';

export const Navbar = () => {
    const navigate=useNavigate()

    const [toggle, setToggle] = React.useState(false)
    const [toggleList, setTogglelist] = React.useState(false)
    const user=Cookies.get("User")

    const handleLogout=()=>{
        Cookies.remove("User")
        Cookies.remove("Id")
        console.log("Clicked")
        navigate("/")
    }
    
    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <div >
            <div className=' font-sans flex justify-between items-center px-2 py-4 md:px-8 md:py-2   ' >
                <div className='w-2/5 flex  items-center '>
                    <div className='w-28 md:w-40'>
                        <img src={name1} alt="" className=' ' />
                        {/* <img src={name2} alt="" className='w-0 dark:w-40 invisible dark:visible ' /> */}
                    </div>

                </div>
                <div className='w-1/5  text-center'>
                    { user &&
                        <button onClick={() => setTogglelist(!toggleList)} className='text-[20px] hover:border-b-2  hover:text-[#21E535] hover:border-[#21E535]'>{user}
                        </button>}

                </div>
                <div className='w-[38%] flex justify-end items-center space-x-4'>
                    {user && (
                        <>
                            <button
                                type="button"
                                className="text-base w-10  flex justify-center items-center h-10 lg:hidden px-2 py-1  bg-white border rounded-full"
                                onClick={() => setToggle(!toggle)}
                            >
                                <GiHamburgerMenu />
                            </button>
                            <Link to="/history" className='hidden lg:inline-block'>History</Link>
                            <Link to="/account" className='hidden lg:inline-block'>My Account</Link>
                            <Link className='hidden lg:inline-block'>Settings</Link>
                            <button className='hidden lg:inline-block' onClick={handleLogout} >Log Out</button>


                        </>
                    )}

                    {/* <button type='button' className='text-base w-10 flex justify-center items-center h-10 md:text-xl px-2 py-1 dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full ' onClick={() => setDarkTheme(!darkTheme)}>
                        {darkTheme ? <FaSun /> : <FaRegMoon />}
                    </button> */}
                </div>
            </div>
            {toggleList && (
                <div className='absolute w-60 left-1/2 bg-white  z-40 transform -translate-x-1/2 rounded-md border-[1px] border-black'>
                    <ul className="  p-4">
                        <Link to="/home" className="flex space-x-3 p-1 py-2 my-2 text-[18px] hover:bg-gray-200 hover:rounded-md items-center">
                            <div><AiOutlineUser /></div>
                            <div>
                                {user}
                            </div>
                        </Link>
                        <Link to="/others" state={"MOM"} className="flex space-x-3 p-1 py-2 my-2 text-[18px] hover:bg-gray-200 hover:rounded-md items-center">
                            <div><AiOutlineUser /></div>
                            <div>
                                MOM
                            </div>
                        </Link>
                        <Link to="/group" state={"Friend group"} className="flex space-x-3 p-1 py-2 my-2 text-[18px] hover:bg-gray-200 hover:rounded-md items-center">
                            <div><AiOutlineUser /></div>
                            <div>
                                FRIENDS GROUP
                            </div>
                        </Link>
                        <li className="   ">
                        <Popup className='pop' trigger={
                                <div className=' flex justify-center space-x-1 items-center transition ease-in-out hover:scale-110'>
                                  <div  className="w-full p-1 py-2 my-2 text-[18px] flex justify-center font-bold text-white rounded-md  items-center bg-[#21E535]  "> <FiUserPlus  className='mem-icon' size={"1.25rem"}/>   </div>
                                  {/* <button className=''>Cite */}
                                  {/* </button> */}
                                </div>
                              }
                               modal nested>{
                                  close => (
                                    <div className='modal break-words' >
                                      <pre className='content my-[3%] mx-[3%] px- flex flex-col '>
                                        <div className='text-2xl mb-5 md:text-center'>Add a Friend</div>
                                        <div className='flex mb-3 flex-col md:flex-row'>
                                            <div className='md:w-1/4 w-full my-2'>Enter name
                                            </div >
                                            <div className='md:w-3/4 w-full'>
                                            <input type="text"  placeholder='' className='md:ml-3 md:w-3/4 w-full  px-2 py-2 border-2 outline-none rounded-2xl'/>
                                            </div>
                                        </div>

                                        <div className='flex mb-3 flex-col md:flex-row'>
                                            <div className='md:w-1/4 w-full my-2'>Enter email
                                            </div >
                                            <div className='md:w-3/4 w-full'>
                                            <input type="text"  placeholder='' className='md:ml-3 md:w-3/4 w-full  px-2 py-2 border-2 outline-none rounded-2xl'/>
                                            </div>
                                        </div>
                                      </pre>
                                      <div className='flex w-full justify-evenly my-[1%] items-center '>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2 tracking-wider  tranistion ease-in-out text-[#666666]'>
                                        <button className=' flex items-center justify-center w-full ' onClick={() => close()}><MdDone className='mem-icon m-[2%]' size={'1.25rem'} /> </button>
                                        
                                        </div>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2  tranistion ease-in-out tracking-wider  text-[#666666]'>
                                          <button className=' flex items-center justify-center w-full ' onClick={() => close()}><IoMdClose className='mem-icon m-[2%]' size={'1.25rem'} /> </button>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }

                              </Popup>
                        </li>
                        <li className="   ">
                        <Popup className='pop' trigger={
                                <div className=' flex justify-center space-x-1 items-center transition ease-in-out hover:scale-110'>
                                  <div  className="w-full p-1 py-2 my-2 text-[18px] flex justify-center font-bold text-white rounded-md  items-center bg-[#21E535]  "> <AiOutlineUsergroupAdd  className='mem-icon' size={"1.25rem"}/>   </div>
                                  {/* <button className=''>Cite */}
                                  {/* </button> */}
                                </div>
                              }
                               modal nested>{
                                  close => (
                                    <div className='modal break-words' >
                                      <pre className='content my-[3%] mx-[3%] px- flex flex-col '>
                                        <div className='text-2xl mb-5 md:text-center'>Create Group</div>
                                        <div className='flex mb-3 flex-col md:flex-row'>
                                            <div className='md:w-1/4 w-full my-2'>Enter group name
                                            </div >
                                            <div className='md:w-3/4 w-full'>
                                            <input type="text"  placeholder='' className='md:ml-3 md:w-3/4 w-full  px-2 py-2 border-2 outline-none rounded-2xl'/>
                                            </div>
                                        </div>

                                        <div className='flex mb-3 flex-col md:flex-row'>
                                            <div className='md:w-1/4 w-full my-2'>Enter email
                                            </div >
                                            <div className='md:w-3/4 w-full'>
                                            <input type="text"  placeholder='' className='md:ml-3 md:w-3/4 w-full  px-2 py-2 border-2 outline-none rounded-2xl'/>
                                            </div>
                                        </div>
                                        <div className='flex mb-3 flex-col md:flex-row'>
                                            <div className='md:w-1/4 w-full my-2'>Enter email 
                                            </div >
                                            <div className='md:w-3/4 w-full'>
                                            <input type="text"  placeholder='' className='md:ml-3 md:w-3/4 w-full  px-2 py-2 border-2 outline-none rounded-2xl'/>
                                            </div>
                                        </div>
                                        <div className='flex mb-3 flex-col md:flex-row'>
                                            <div className='md:w-1/4 w-full my-2'>Enter email
                                            </div >
                                            <div className='md:w-3/4 w-full'>
                                            <input type="text"  placeholder='' className='md:ml-3 md:w-3/4 w-full  px-2 py-2 border-2 outline-none rounded-2xl'/>
                                            </div>
                                        </div>
                                      </pre>
                                      <div className='flex w-full justify-evenly my-[1%] items-center '>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2 tracking-wider  tranistion ease-in-out text-[#666666]'>
                                        <button className=' flex items-center justify-center w-full ' onClick={() => close()}><MdDone className='mem-icon m-[2%]' size={'1.25rem'} /> </button>
                                        
                                        </div>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2  tranistion ease-in-out tracking-wider  text-[#666666]'>
                                          <button className=' flex items-center justify-center w-full ' onClick={() => close()}><IoMdClose className='mem-icon m-[2%]' size={'1.25rem'} /> </button>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }

                              </Popup>
                        </li>
                    </ul>
                </div>
            )}
            {toggle && (
                <div className="lg:hidden w-60 absolute z-50 bg-white  right-1 rounded-md border-[1px] border-black">
                    <ul className="  p-4">
                        <Link to="/history" className="flex space-x-3 p-1 py-2 my-2 text-[18px] hover:bg-gray-200 hover:rounded-md items-center">
                            <div>

                                <FaHistory />
                            </div>
                            <div>

                                History
                            </div>
                        </Link>
                        <Link to="/account" className="flex space-x-3 p-1 py-2 my-2 text-[18px] hover:bg-gray-200 hover:rounded-md items-center">
                            <div>

                                <MdOutlineAccountCircle />
                            </div>
                            <div>

                                My Account
                            </div>
                        </Link>
                        <li className="flex space-x-3 p-1 py-2 my-2 text-[18px] hover:bg-gray-200 hover:rounded-md items-center">
                            <div>
                                <FiSettings />
                            </div>
                            <div>
                                Settings
                            </div>
                        </li>
                        <li onClick={handleLogout} className=" p-1 py-2 my-2 text-[18px] text-center text-white rounded-md hover:bg-gray-200 hover:rounded-md items-center bg-[#21E535]  ">
                            Log Out
                        </li>

                    </ul>
                </div>
            )}


        </div>
    )
}
