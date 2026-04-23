import React from 'react';

const box = () => {
    return (
        <div className='my-25 max-w-300 mx-auto grid grid-cols-2 gap-6'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 '>
            <div className='bg-amber-400 p-60'> Box1</div>
            <div className='bg-gray-800 p-60'> Box2</div>
        </div></div>
    );
};

export default box;