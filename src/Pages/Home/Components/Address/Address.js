import React from 'react';
import { FcCalendar } from "react-icons/fc";
import { BsPinMap} from "react-icons/bs";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const Address = () => {

    const information =[
        {
            icon:<FcCalendar/>,
            title:"We are open Everyday",
            details:"9.00 am - 10.00 pm"
        },
        {
            icon:<MdOutlinePermPhoneMsg/>,
            title:"Have a question?",
            details:"+880 *******"
        },
        {
            icon:<BsPinMap/>,
            title:"Visit our shop at",
            details:"Mirpur, Dhaka"
        }
    ]
    return (
        <div id='contact' className='grid grid-cols-3 h-64 bg-black text-white rounded-xl'>
            {
                information.map(info=>
                    <div className="flex mx-auto my-auto">
                        <span className='text-5xl mr-5'>{info.icon}</span>
                        <div>
                            <p className='text-sm'>{info.title}</p>
                            <h2 className='text-xl font-bold'>{info.details}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Address;