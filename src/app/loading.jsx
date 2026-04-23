import React from 'react';
import { FadeLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className=' flex justify-center items-center py-30'>
            <FadeLoader  color='#244d3f'/>
        </div>
    );
};

export default loading;