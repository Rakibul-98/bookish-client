import React from 'react';
import img1 from '../../../../assets/images/about/1.jpg';
import img2 from '../../../../assets/images/about/2.jpg';

const About = () => {
    return (
        <div id='about' className="hero my-20">
            <div className="hero-content flex-col md:flex-row">
                <div className="about-images relative w-1/2 mb-10">
                    <img className='shadow-2xl w-8/12' src={img1} alt="" />
                    <img className='w-3/6 shadow-2xl absolute left-1/2 top-1/4 border-8' src={img2} alt="" />
                </div>
                <div className='w-1/2 md:ml-10'>
                    <p className='font-bold text-red-400'>ABOUT US</p>
                    <h1 className="text-3xl font-bold lg:w-2/3 md:text-5xl">We Are Affordable And Reliable Of Selling Books!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default About;