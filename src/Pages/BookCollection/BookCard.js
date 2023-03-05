import React from 'react';
import { AiFillStar } from "react-icons/ai";

const BookCard = ({book}) => {
    const {name, price, author, img, rating} = book;
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl h-3/4" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{author}</p>
                <p>Price: $ <span className='font-semibold'>{price}</span></p>
                <p className='flex'>Ratings : {rating} <span className='mt-1 ml-1 text-yellow-500'><AiFillStar/></span></p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;