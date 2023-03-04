import React from 'react';
import './CarouselItem.css';

const CarouselItem = ({slide}) => {
    const {id, prev, next, image} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} className="w-screen rounded-xl" alt=''/>
            </div>
            <div className="absolute left-20 top-1/4 text-white">
                <h2 className='lg:text-6xl font-semibold sm:text-4xl'>Affordable <br /> Price For Car <br /> Servicing</h2>
                <p className='my-5'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <button className="btn btn-error mr-5">Discover more</button>
                <button className="btn btn-outline text-white">Latest project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default CarouselItem;