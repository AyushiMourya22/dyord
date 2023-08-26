import React, { useEffect, useState } from "react"
import { FaWalking, FaCarSide, FaBus, FaBicycle, FaPlane } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import { SlCalender } from "react-icons/sl"
import { BiTimeFive } from "react-icons/bi"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify"

export const Designyour = () => {
    const navigate = useNavigate()
    const [locs, setLocs] = useState([]);
    const [destLoc, setDestLoc] = useState("");
    const [source, setsource] = useState("");
    const [purpose, setPurpose] = useState("Daily Life Travelling");

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const user = Cookies.get("User")
    const id = Cookies.get("Id")

    const [startDateError, setStartDateError] = useState(false);
const [endDateError, setEndDateError] = useState(false);
const [startTimeError, setStartTimeError] = useState(false);
const [endTimeError, setEndTimeError] = useState(false);

    const handleAdd = (e) => {
        e.preventDefault();
        if (destLoc !== "") {

            setLocs([...locs, destLoc]);
            setDestLoc("")
        }

    };


    const handleClose = (id) => {
        const update = locs.filter((item, key) => key !== id)
        setLocs(update)
        console.log(locs)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // Perform your form submission logic here
            const start = format(startDate, 'yyyy/MM/dd')
        const end = format(endDate, 'yyyy/MM/dd')
        console.log(source)
        console.log(locs)
        console.log(start)
        console.log(end)
        console.log(startTime)
        console.log(endTime)
        console.log(purpose)
        const obj = {
            source,
            id,
            destination: locs,
            startTime, endTime, startDate: start, endDate: end, purpose
        }
        console.log(obj)
        
        navigate("/plan")
        } catch(e) {
            // Handle the case where errors exist
            console.log(e)
            toast.error("Enter all field value")
        }
        
    }

    useEffect(() => {
        if (!startDate) setStartDateError(true);
        else setStartDateError(false);
    
        if (!endDate) setEndDateError(true);
        else setEndDateError(false);
    
        if (!startTime) setStartTimeError(true);
        else setStartTimeError(false);
    
        if (!endTime) setEndTimeError(true);
        else setEndTimeError(false);
    }, [startDate, endDate, startTime, endTime]);
    

    return (
        <div>
            <div className="text-3xl font-sans font-bold md:text-center mb-5 mx-12 text-[#21E535] dark:bg-blue-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-[#21E535]   dark:bg-clip-text dark:text-transparent">Design Your day</div>
            {/* <h2 className='my-[5%] md:my-[0%] text-left font-bold start  w-full py-[3%] text-2xl md:text-3xl text-gray-900 dark:bg-blue-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-[#21E535]   dark:bg-clip-text dark:text-transparent md:text-center'>Start your journey with us</h2> */}
            <div className="flex flex-col p-4 mb-[3%] mx-[7%] text-black bg-white border-white shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-3xl border-2 md:mx-[20%]">
                <div className="my-2 flex space-x-2 md:space-x-10 justify-center">
                    <div className="w-12 flex justify-center items-center h-12 md:text-xl px-2 py-1  text-black bg-white border rounded-full"><FaWalking size={"1.5rem"} /></div>
                    <div className="w-12 flex justify-center items-center h-12 md:text-xl px-2 py-1  text-black bg-white border rounded-full"><FaCarSide size={"1.5rem"} /></div>
                    <div className="w-12 flex justify-center items-center h-12 md:text-xl px-2 py-1  text-black bg-white border rounded-full"><FaBus size={"1.5rem"} /></div>
                    <div className="w-12 flex justify-center items-center h-12 md:text-xl px-2 py-1  text-black bg-white border rounded-full"><FaBicycle size={"1.5rem"} /></div>
                    <div className="w-12 flex justify-center items-center h-12 md:text-xl px-2 py-1  text-black bg-white border rounded-full"><FaPlane size={"1.5rem"} /></div>
                </div>
                <div className=" md:px-[10%] ">
                    <div className="flex flex-col md:items-center md:flex-row mb-5 md:space-x-4 ">
                        <div className="text-[#5C5C5C] text-[18px] font-[600] my-2 text-left ">From: </div>
                        <div className="flex my-2 p-2 w-full justify-start items-center rounded-md shadow-md shadow-gray-300  border-2 border-gray-400 ">
                            <div className="w-[10%] lg:w-[8%] text-[#1061FF] "><MdLocationPin size={"1.5rem"} /></div>
                            <div className="w-full"> <input required type="text" value={source} onChange={(e) => setsource(e.target.value)} className=" w-full focus:outline-none  p-1 text-[#2B2B2B] " placeholder="Your location" />  </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full md:flex-row my-5">
                        <div className="text-[#5C5C5C] text-[18px] font-[600] my-2 w-full md:w-[25%] ">Locations you are visiting: </div>
                        <div className="flex my-2 w-full justify-start items-center md:w-[75%] space-x-3">
                            <div className="rounded-3xl md:w-[70%] shadow-lg shadow-gray-300 p-2 border-2 border-gray-400 flex justify-between items-center">
                                <div className="w-[13%] lg:w-[8%] text-[#0000004D] "><MdLocationPin size={"1.5rem"} /></div>
                                <div className="w-full"> <input required type="text" className="focus:outline-none  p-1  text-[#2B2B2B] w-full " placeholder="Search" value={destLoc} onChange={(e) => setDestLoc(e.target.value)} />  </div>
                            </div>
                            <button onClick={handleAdd} className="rounded-3xl w text-center shadow-lg md:w-[30%] text-gray-500 font-bold dark: shadow-gray-300 p-2 ">Add</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-start">{locs.map((item, key) => {
                        return (<div className="flex justify-center items-center my-2 mx-4 dark:text-black space-x-3" >
                            <div className="bg-[#E7FFFF] rounded-md border-2 border-sky-700 px-3 py-1 flex justify-between items-center">
                                <div className="w-[10%] text-[#0000004D] "><MdLocationPin size={"1.5rem"} /></div>
                                <div className="dark:text-black px-2">

                                    {item}
                                </div>
                            </div>
                            <div className="" onClick={() => handleClose(key)}><AiOutlineClose /></div>
                        </div>)
                    })}</div>
                    <div className="flex justify-between  my-5 md:space-x-4 ">
                        <div className="md:flex w-[45%] md:space-x-5 ">
                            <div className="text-[rgb(92,92,92)] text-[18px] font-[600] flex my-2 text-left items-center">Date<SlCalender className="mx-1" />: </div>
                            <div className="flex space-x-1 md:space-x-5 w-full justify-between items-center   ">
                                <div className={`w-[50%] border-b-2 ${startDateError ? 'border-black' : 'border-black'}`}>
                                    <DatePicker
                                        selectsStart
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        startDate={startDate}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Start Date"
                                        className="w-full"
                                    />


                                </div>
                                <div className="w-[5%] text-black">-</div>
                                <div className={`w-[50%] border-b-2 ${startDateError ? 'border-black' : 'border-black'}`}>

                                    <DatePicker
                                        selectsEnd
                                        selected={endDate}
                                        dateFormat="yyyy-MM-dd"
                                        onChange={date => setEndDate(date)}
                                        placeholderText="End Date"
                                        endDate={endDate}
                                        startDate={startDate}
                                        minDate={startDate}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex w-[45%]  md:space-x-5">
                            <div className="text-[#5C5C5C] text-[18px] font-[600] flex items-center my-2 text-left ">Time <BiTimeFive className="mx-1" />: </div>
                            <div className="flex space-x-1 md:space-x-5 w-full justify-between items-center   ">
                                <div className=" w-[47%] border-b-[1px] border-black ">
                                    <div className="border-b-2 border-black">
                                        <input required type="text" pattern="(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="HH:MM:SS" className="w-full focus:outline-none text-[#2B2B2B]" />
                                    </div>

                                </div>
                                <div className="w-[4%] text-black">-</div>
                                <div className="w-[47%]  border-b-[1px] border-black ">
                                    <div className="border-b-2 border-black">
                                        <input required type="text" pattern="(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]" value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="HH:MM:SS" className="w-full focus:outline-none text-[#2B2B2B]" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between my-5 md:space-x-4">
                        <div>
                            <label for="lang" className="text-[#5C5C5C] text-[18px] font-[600] my-2 text-left mr-3" > Purpose: </label>
                            <select name="languages" value={purpose} onChange={(e) => setPurpose(e.target.value)} id="lang" className="border-2 p-1 rounded-lg px-3">
                                <option value="Daily Life Travelling">Daily Life Travelling</option>
                                <option value="Business Trip">Business Trip</option>
                                <option value="Tour">Tour</option>

                            </select></div>

                    </div>
                </div>
                <button onClick={handleSubmit} className='w-full md:w-1/2 mx-auto my-[5%] md:my-[3%]  bg-[#21E535]  dark:bg-blue-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-[#21E535] py-[1%] text-white rounded-lg font-bold  leading-7 text-xl md:text-2xl' >Done</button>
                        <ToastContainer/>
            </div>
        </div>
    )
}

