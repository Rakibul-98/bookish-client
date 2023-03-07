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
        <div className='text-center'>
            <p className='font-bold text-red-400'>CORE FEATURES</p>
            <h3 className='text-4xl font-bold mb-5'>Why You Choose Us?</h3>
            <p>Our bookstore will fill your bookshelves with tons of new stories to read. <br /> Once you peak inside our books, you won’t want to leave</p>
            <div className='grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-10 mt-10 mb-20 mx-3 md:mx-10 lg:mx-2'>
                {
                    specialities.map(s=>
                        <div className='card border-2 h-40 justify-center hover:bg-orange-500 hover:text-white'>
                            <span className='text-4xl mx-auto'>{s.icon}</span>
                            <p className='text-center mt-3 font-bold'>{s.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Specialty;