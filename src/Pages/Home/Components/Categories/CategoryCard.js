import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const CategoryCard = ({category}) => {
    const {img, title, NoOfBooks } = category;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl sm:mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex text-red-500">
                    <p>In Stock: <span className='font-bold'>{NoOfBooks}</span></p>
                    <button className=""><HiArrowNarrowRight/></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;