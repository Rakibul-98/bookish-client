import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const TeamCard = ({team}) => {
    const {img, name, expertise} = team;

    return (
        <div className="card w-96 sm:w-11/12 bg-base-100 shadow-xl mx-auto">
            <figure className="px-5 pt-5">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name} </h2>
                <p>{expertise}</p>
                <div className="card-actions text-white">
                    <Link className='bg-blue-900 p-1 rounded-full' to="https://facebook.com/"><FiFacebook/></Link>
                    <Link className='bg-sky-300 p-1 rounded-full' to="https://twitter.com/"><FiTwitter/></Link>
                    <Link className='bg-blue-700 p-1 rounded-full' to="https://linkedin.com/"><FaLinkedinIn/></Link>
                    <Link className='bg-rose-500 p-1 rounded-full' to="https://www.instagram.com/"><FiInstagram/></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;