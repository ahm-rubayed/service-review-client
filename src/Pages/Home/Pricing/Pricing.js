import React from 'react';
import "./Pricing.css"
import { FaCheck  } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='bg-gray-100 py-16 my-28'>
        <div className='max-w-screen-lg mx-auto '>
            <div className='relative header'>
            <h2 className="text-4xl font-semibold text-center">Choose Your Package</h2>
            </div>
            <div className="grid grid-cols-3 my-16 justify-center items-center mx-auto text-center">
                <div className='justify-self-center bg-white py-12 px-28 rounded-lg shadow-lg'>
                    <h3 className="text-3xl font-semibold">Weeding</h3>
                    <small className='block'>Attend only first day</small>
                    <span className="text-5xl my-6 block">46$</span>
                    <ul>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                    </ul>
                    <button className='book-btn relative transition duration-150 ease-linear py-2 px-4 rounded mt-6 uppercase font-bold'>Book Now</button>
                </div>
                <div className='justify-self-center bg-white py-12 px-28 rounded-lg shadow-lg'>
                    <h3 className="text-3xl font-semibold">Studio</h3>
                    <small className='block'>Attend only first day</small>
                    <span className="text-5xl my-6 block">76$</span>
                    <ul>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                    </ul>
                    <button className='book-btn transition duration-150 ease-linear py-2 px-4 rounded mt-6 uppercase font-bold'>Book Now</button>
                </div>
                <div className='justify-self-center bg-white py-12 px-28 rounded-lg shadow-lg'>
                    <h3 className="text-3xl font-semibold">Fashion</h3>
                    <small className='block'>Attend only first day</small>
                    <span className="text-5xl my-6 block">96$</span>
                    <ul>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                        <li className='flex gap-4 items-center my-2'> <span><FaCheck></FaCheck></span> ultimate enterance</li>
                    </ul>
                    <button className='book-btn transition duration-150 ease-linear py-2 px-4 rounded mt-6 uppercase font-bold'>Book Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pricing;