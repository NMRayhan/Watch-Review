import React from 'react';

const ReviewItem = ({details}) => {
    const {picture, email, name, gender, phone, rating} = details;
    return (
        <div className='border-2'>
            <h1>{name}</h1>
        </div>
    );
};

export default ReviewItem;