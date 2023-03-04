import React from 'react';
import CarouselItem from './CarouselItem';
import img1 from '../../../../assets/images/carousel/1.jpg';
import img2 from '../../../../assets/images/carousel/2.jpg';
import img3 from '../../../../assets/images/carousel/3.jpg';
import img4 from '../../../../assets/images/carousel/4.jpg';
import img5 from '../../../../assets/images/carousel/5.jpg';
import img6 from '../../../../assets/images/carousel/6.jpg';


const bannerItem =[
    {id:1,prev:6,next:2,image:img1},
    {id:2,prev:1,next:3,image:img2},
    {id:3,prev:2,next:4,image:img3},
    {id:4,prev:3,next:5,image:img4},
    {id:5,prev:4,next:6,image:img5},
    {id:6,prev:5,next:1,image:img6}
]

const Banner = () => {
    return (
        <div className="carousel lg:w-full mb-10 sm:w-11/12 mx-auto">
            {
                bannerItem.map(slide=><CarouselItem key={slide.id} slide={slide}></CarouselItem>)
            }
        </div>
       
    );
};

export default Banner;