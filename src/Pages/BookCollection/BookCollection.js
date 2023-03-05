import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const BookCollection = () => {
    const category = useLoaderData();
    const books = category.books;
    console.log(books);
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 my-20'>
            {
                books.map(book=><BookCard key={book.b_id} book={book}></BookCard>)
            }
        </div>
    );
};

export default BookCollection;