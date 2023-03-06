import React from 'react';
import img1 from '../../../../assets/images/about/1.jpg';
import img2 from '../../../../assets/images/about/2.jpg';

const About = () => {
    return (
        <div id='about' className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="about-images relative w-1/2 mb-10">
                    <img className='w-4/6 shadow-2xl' src={img1} alt="" />
                    <img className='w-3/6 h-3/5 shadow-2xl absolute border-8 left-1/3 top-1/2' src={img2} alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;