import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assets/icon/default.png';
import { HiOutlineShoppingBag} from "react-icons/hi2";
import { FiSearch} from "react-icons/fi";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const {user,logOut} = useContext(AuthContext);


    const menuItems= <>
    <li><Link to='/'>Home</Link></li>
    <li><a href='#category'>Categories</a></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#contact'>Contact</a></li>
</>

    return (
        <div className="navbar mt-5 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <Link to='/'>
                    <img className='h-16 mask mask-decagon' src={icon} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                    {
                        user?.uid ? <li><button onClick={logOut}>Log Out</button></li> : <li><Link to='/login'>Login</Link></li>
                    }
                    
                </ul>
            </div>
            <div className="navbar-end ">
                <p className='font-bold mr-5'>{user?.email}</p>
                <span className='text-2xl'><HiOutlineShoppingBag></HiOutlineShoppingBag></span>
                <span className='text-2xl mx-3'><FiSearch></FiSearch></span>
                <Link className="btn btn-outline btn-secondary" to=''>Appointment</Link>
            </div>
        </div>
    );
};

export default Header;