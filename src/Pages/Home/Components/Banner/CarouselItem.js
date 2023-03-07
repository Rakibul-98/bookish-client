import React from 'react';
import './CarouselItem.css';

const CarouselItem = ({slide}) => {
    const {id, prev, next, image} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} className="w-screen rounded-xl" alt=''/>
            </div>
            <div className="carousel-text absolute left-20 top-1/4 text-white">
                <h2 className='lg:text-6xl font-semibold sm:text-4xl'>Stories, ideas, <br /> and knowledge that <br /> will change your life forever </h2>
                <p className='my-5'>We’re your essential resource for discovering new stories, ideas, and experiences <br /> to feed the mind and nourish the soul</p>
                <button className="btn btn-error mr-5 hover:bg-transparent hover:text-white">Discover more</button>
                <button className="btn btn-outline text-white">Latest project</button>
            </div>
            <div className="carousel-btn absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 hover:bg-transparent">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-transparent">❯</a>
            </div>
        </div>
    );
};

export default CarouselItem;