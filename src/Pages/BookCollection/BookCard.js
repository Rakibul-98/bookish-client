import React from 'react';
import { AiFillStar } from "react-icons/ai";

const BookCard = ({book}) => {
    const {name, price, author, img, rating} = book;
    return (
        <div className="card shadow-xl border-solid border-2">
            <figure className="p-5 h-2/3">
                <img src={img} alt="" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{author}</p>
                <p>Price: $ <span className='font-semibold'>{price}</span></p>
                <p className='flex'>Ratings : {rating} <span className='mt-1 ml-1 text-yellow-500'><AiFillStar/></span></p>
                <div className="card-actions w-full pt-5">
                    <button className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;