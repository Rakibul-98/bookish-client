import React from 'react';
import logo from "../../../assets/logo/default.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white bg-slate-700 md:px-20 px-10 pt-12 pb-5">
                <div>
                    <img className='md:h-68 h-40' src={logo} alt="" />
                </div> 
                <div className="footer grid grid-cols-3 gap-7">
                    <div>
                        <span className="footer-title">Services</span> 
                        <a href='/' className="link link-hover">Branding</a> 
                        <a href='/' className="link link-hover">Design</a> 
                        <a href='/' className="link link-hover">Marketing</a> 
                        <a href='/' className="link link-hover">Advertisement</a>
                    </div> 
                    <div>
                        <span className="footer-title">Company</span> 
                        <a href='/' className="link link-hover">About us</a> 
                        <a href='/' className="link link-hover">Contact</a> 
                        <a href='/' className="link link-hover">Jobs</a> 
                        <a href='/' className="link link-hover">Press kit</a>
                    </div> 
                    <div>
                        <span className="footer-title">Legal</span> 
                        <a href='/' className="link link-hover">Terms of use</a> 
                        <a href='/' className="link link-hover">Privacy policy</a> 
                        <a href='/' className="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;