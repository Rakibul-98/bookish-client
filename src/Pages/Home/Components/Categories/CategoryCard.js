import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {img, title,_id } = category;
    return (
        <div id='category' className="card card-compact w-96 bg-base-100 shadow-xl sm:mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{title}</h2>
                <Link to={`/collections/${_id}`}>
                    <p className="btn btn-outline btn-success w-full">View collection</p>
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;