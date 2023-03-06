import React from 'react';
import {  RiTeamFill } from "react-icons/ri";
import { BiSupport  } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { IoPricetagsSharp } from "react-icons/io5";
import {  SiAdguard } from "react-icons/si";
import {  TbTruckDelivery } from "react-icons/tb";

const Specialty = () => {

    const specialities = [
        {
            id:1,
            icon:<RiTeamFill/>,
            title:"Expert Team",
        },
        {
            id:2,
            icon:<BsClockHistory/>,
            title:"Timely Delivery",
        },
        {
            id:3,
            icon:<BiSupport/>,
            title:"24/7 Support",
        },
        {
            id:4,
            icon:<IoPricetagsSharp/>,
            title:"Best price",
        },
        {
            id:5,
            icon:<SiAdguard/>,
            title:"100% Guarantee"
        },
        {
            id:6,
            icon:<TbTruckDelivery/>,
            title:"Safe service"
        },
    ]
    return (
        <div className='grid grid-cols-6 mb-20'>
            {
                specialities.map(s=>
                    <div className='card border-2 h-40 mx-3 justify-center hover:bg-orange-500 hover:text-white'>
                        <span className='text-4xl mx-auto'>{s.icon}</span>
                        <p className='text-center mt-3 font-bold'>{s.title}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Specialty;