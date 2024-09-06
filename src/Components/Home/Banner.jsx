import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDirectionsBike } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";

const Banner = () => {
    return (
        <div className="hero md:-mt-20 mt-0 min-h-[600px]">
            <div className="mt-0 md:mt-20 hero-content flex-col lg:flex-row text-[#3d3c3c]">
                <div style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    <h1 className="text-3xl md:text-6xl font-extrabold">Fastest <br /> <span className='text-[#0393b7]'>Delivery</span> & <br /> Easy <span className='text-[#0393b7]'>Pickup</span></h1>
                    <p className="py-6 max-w-sm">
                        Cravey is an online food-making and delivery service,  offering fresh, delicious meals delivered straight to your door for a convenient and tasty dining experience.
                    </p>
                    <button className="btn bg-[#e66611] text-white border-none"><FaMagnifyingGlass />Find Restaurants</button>
                </div>
                <img
                    src="https://i.ibb.co/fMmr535/Screenshot-2024-09-06-001702-removebg-preview.png"
                    className="max-w-xs md:max-w-lg " />

                <div className='grid gap-4 md:gap-8 px-8'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 p-2 rounded-full flex items-center justify-center'>
                            <MdDirectionsBike className='h-8 w-8' />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='text-lg font-bold'>Fastest Delivery</h2>
                            <p className='font-semibold text-sm text-[#7d7c7c]'>Promise to deliver within 30 minutes</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 p-2 rounded-full flex items-center justify-center'>
                            <IoBagHandle className='h-8 w-8' />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='text-lg font-bold'>Pick Up</h2>
                            <p className='font-semibold text-sm text-[#7d7c7c]'>Pick up delivery at your doorstep</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 p-2 rounded-full flex items-center justify-center'>
                            <ImSpoonKnife className='h-8 w-8' />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='text-lg font-bold'>Fastest Delivery</h2>
                            <p className='font-semibold text-sm text-[#7d7c7c]'>Promise to deliver within 30 minutes</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Banner;