import React from 'react';

const CarouselItem = ({slide}) => {
    const {id, prev, next, image} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} className="w-full rounded-lg" alt=''/>
            </div>
            <div className="absolute left-20 top-1/4 text-white">
                <h2 className='text-6xl font-semibold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                <p className='my-5'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <button className="btn btn-error mr-5">Discover more</button>
                <button className="btn btn-outline text-white">Latest project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    //      <div className="carousel w-full">
    //      <div id="slide1" className="carousel-item relative w-full">
    //        <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    //        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //          <a href="#slide4" className="btn btn-circle">❮</a> 
    //          <a href="#slide2" className="btn btn-circle">❯</a>
    //        </div>
    //      </div> 
    //    </div>
    );
};

export default CarouselItem;