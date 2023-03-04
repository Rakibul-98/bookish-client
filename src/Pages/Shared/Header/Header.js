import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assets/icon/default.png';
import { HiOutlineShoppingBag} from "react-icons/hi2";
import { FiSearch} from "react-icons/fi";


const menuItems= <>
    <li><Link>Home</Link></li>
    <li><Link>Service</Link></li>
    <li><Link>Blog</Link></li>
    <li><Link>About</Link></li>
    <li><Link>Contact</Link></li>
</>

const Header = () => {
    return (
        <div className="navbar bg-base-100 my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='h-16' src={icon} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <HiOutlineShoppingBag></HiOutlineShoppingBag>
                <FiSearch></FiSearch>
                <Link className="btn btn-outline btn-secondary" to=''>Appointment</Link>
            </div>
        </div>
    );
};

export default Header;