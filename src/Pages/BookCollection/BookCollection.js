import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const BookCollection = () => {
    const category = useLoaderData();
    const books = category.books;
    console.log(books);
    return (
        <div className=''>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 my-20'>
                {
                    books.map(book=><BookCard key={book.b_id} book={book}></BookCard>)
                }
            </div>
            <Link to="/"><button className='btn btn-primary mb-10'><span className='text-4xl mr-3 pb-2'>←</span> Go back </button></Link>
        </div>
    );
};

export default BookCollection;