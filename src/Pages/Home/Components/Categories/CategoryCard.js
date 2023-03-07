import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {img, title,_id } = category;
    return (
        <div id='category' className="card card-compact md:w-11/12 lg:w-full w-96 bg-base-100 shadow-xl mx-auto md:mb-7 lg:mb-0">
            <figure><img className='' src={img} alt="" /></figure>
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