import React from 'react';
import error from "../../assets/error.jpg"
import Header from '../Shared/Header/Header';

const ErrorRoute = () => {
    return (
        <div>
            <img src={error} alt="" className='max-w-prose md:max-w-screen-md mx-auto' />
        </div>
    );
};

export default ErrorRoute;