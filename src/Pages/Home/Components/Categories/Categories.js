import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    
    return (
        <div className="text-center">
            <p className='font-bold text-red-400'>CATEGORY</p>
            <h3 className='text-4xl font-bold mb-5'>Book Category</h3>
            <p>Our bookstore will fill your bookshelves with tons of new stories to read. <br /> Once you peak inside our books, you won’t want to leave</p>
            <div className=' mt-10 mb-20 mx-3 grid gap-16 md:gap-5 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category=><CategoryCard key={category._id} category={category}></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Categories;