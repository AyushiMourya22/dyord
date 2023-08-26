import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios"
import logo from "../assets/logosmall.png"
import logodark from "../assets/logosmalldark.png"
import { MdLocationPin } from "react-icons/md"
export const Location = () => {
    const [loc, setLoc] = useState()
    const[comp,setComp]=useState()
    const [loading, setloading] = useState(true)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            const address = async () => {
                const { data } = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${"pk.586b7481018af4ae1f41145251bbf833"}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
                console.log(data.address)
                setLoc(data.address)
                let s=data.address.county+", "+data.address.state + ", "+data.address.postcode
                setComp(s)
            }
            setloading(false)
            address()
        });
    }, []);

    return (
        <div className="min-h-[3rem]">
            {!loading && loc &&
                <div className="flex space-x-3 p-3  md:py-2 justify-center items-center">
                    <img src={logo} alt="" className="w-10 h-10 dark:hidden dark:w-0 dark:h-0" />
                    {/* <img src={logodark} alt="" className="dark:w-10 dark:h-10 hidden dark:inline-block " /> */}
                    <div className="text-center flex italic space-x-2 text-[15px] text-[#FF0000] font-bold ">
                        <p className="text-[#4B4B4B] dark:text-white">
                            Namaste, you are at <span className="text-[#1061FF]"> {comp} </span> 
                        </p>
                        <MdLocationPin className="invisible md:visible text-red" size={"1.2rem"}/>
                    </div>
                </div>

            }
        </div>
    );
};

