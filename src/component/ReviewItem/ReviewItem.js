import React from 'react';
import { CheckCircleIcon, StarIcon } from '@heroicons/react/solid'

const ReviewItem = ({ details }) => {
    const { picture, email, name, gender, phone, rating, review } = details;
    return (
        <div className='border-2 bg-slate-100 rounded-md hover:drop-shadow-xl duration-200 cursor-pointer p-3'>
            <div className='flex justify-around items-center'>
                <h1 className='text-3xl text-black font-medium font-serif'>{name}</h1>
                <div className='w-3/12'>
                    <img src={picture} alt={name} className="w-full rounded-full" />
                </div>
            </div>
            <div>
                <span className='flex items-center'>
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <h1 className='text-left font-mono text-gray-800'> {review}</h1>
                </span>
            </div>
            <div className='mt-2'>
                <h1 className='text-2xl font-medium'>Rating : <span className='text-2xl text-teal-500'>{rating}</span> </h1>
            </div>
        </div>
    );
};

export default ReviewItem;