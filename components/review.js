import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
import pic from "../app/public/dp.jpg"
import pic1 from "../app/public/dp2.jpg"
import pic2 from "../app/public/dp3.jpg"
import pic3 from "../app/public/dp4.jpg"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Review = () => {
  return (
    <div >
        <div className='bg-white p-3 shadow-xl mt-8'>
            <p className='text-blue-400 font-semibold mb-7'>Review</p>
            <div className='border-b'>
            </div>
       
        {/* 1 */}
        <div className='mt-7 flex justify-between items-center '>
            <div className='flex items-center space-x-4'>
                <Image src={pic} className='rounded-full w-12 h-12 ' alt='ali'/>
                <div>
                    <div className='flex items-center space-x-1'>
                        <div className='flex space-x-1'>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        </div>
                        <p className='text-xs font-semibold'>5.0 Star Ratings</p>
                    </div>
                    <p className='text-sm font-bold'>Miles, Esther</p>
                    <p className='text-xs text-gray-500'>The Dropbox HQ in San Francisco is one of the best designed & most comfortable<br/> offices I have ever witnessed. Great stuff! If you happen to visit SanFran, dont miss<br/> the chance to witness it yourself. </p>
                </div>
            </div>
            <div>
            <HiOutlineDotsVertical className='inline-flex bg-blue-200 rounded-full p-2 text-3xl text-blue-800 font-semibold'/>
            </div>
        </div>
        {/* 2 */}
        <div className='mt-7 flex justify-between items-center '>
            <div className='flex items-center space-x-4'>
                <Image src={pic2} className='rounded-full w-12 h-12 ' alt='ali'/>
                <div>
                    <div className='flex items-center space-x-1'>
                        <div className='flex space-x-1'>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        </div>
                        <p className='text-xs font-semibold'>5.0 Star Ratings</p>
                    </div>
                    <p className='text-sm font-bold'>Miles, Esther</p>
                    <p className='text-xs text-gray-500'>The Dropbox HQ in San Francisco is one of the best designed & most comfortable<br/> offices I have ever witnessed. Great stuff! If you happen to visit SanFran, dont miss<br/> the chance to witness it yourself. </p>
                </div>
            </div>
            <div>
            <HiOutlineDotsVertical className='inline-flex bg-blue-200 rounded-full p-2 text-3xl text-blue-800 font-semibold'/>
            </div>
        </div>
        {/* 3 */}
        <div className='mt-7 flex justify-between items-center '>
            <div className='flex items-center space-x-4'>
                <Image src={pic} className='rounded-full w-12 h-12 'alt='alik'/>
                <div>
                    <div className='flex items-center space-x-1'>
                        <div className='flex space-x-1'>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        </div>
                        <p className='text-xs font-semibold'>5.0 Star Ratings</p>
                    </div>
                    <p className='text-sm font-bold'>Miles, Esther</p>
                    <p className='text-xs text-gray-500'>The Dropbox HQ in San Francisco<br/> is one of the best designed & most comfortable </p>
                </div>
            </div>
            <div>
            <HiOutlineDotsVertical className='inline-flex bg-blue-200 rounded-full p-2 text-3xl text-blue-800 font-semibold'/>
            </div>
        </div>
        {/* 4*/}
        <div className='mt-7 flex justify-between items-center '>
            <div className='flex items-center space-x-4'>
                <Image src={pic3} className='rounded-full w-12 h-12 'alt='ali'/>
                <div>
                    <div className='flex items-center space-x-1'>
                        <div className='flex space-x-1'>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        </div>
                        <p className='text-xs font-semibold'>5.0 Star Ratings</p>
                    </div>
                    <p className='text-sm font-bold'>Miles, Esther</p>
                    <p className='text-xs text-gray-500'>The Dropbox HQ in San Francisco is one of the best designed & most comfortable<br/> offices I have ever witnessed. Great stuff! If you happen to visit SanFran, dont miss<br/> the chance to witness it yourself. </p>
                </div>
            </div>
            <div>
            <HiOutlineDotsVertical className='inline-flex bg-blue-200 rounded-full p-2 text-3xl text-blue-800 font-semibold'/>
            </div>
        </div>
        {/* 5 */}
        <div className='mt-7 flex justify-between items-center '>
            <div className='flex items-center space-x-4'>
                <Image src={pic2} className='rounded-full w-12 h-12 ' alt='ali'/>
                <div>
                    <div className='flex items-center space-x-1'>
                        <div className='flex space-x-1'>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        <FaStar className='text-yellow-400 text-xs'/>
                        </div>
                        <p className='text-xs font-semibold'>5.0 Star Ratings</p>
                    </div>
                    <p className='text-sm font-bold'>Miles, Esther</p>
                    <p className='text-xs text-gray-500'>The Dropbox HQ in San Francisco is one of the best designed & most comfortable<br/> offices I have ever witnessed. Great stuff! If you happen to visit SanFran, dont miss<br/> the chance to witness it yourself. </p>
                </div>
            </div>
            <div>
            <HiOutlineDotsVertical className='inline-flex bg-blue-200 rounded-full p-2 text-3xl text-blue-800 font-semibold'/>
            </div>
        </div>
        {/* button */}
        <div className='flex justify-center items-center mt-8'>
        <div className='flex justify-center items-center bg-blue-200 rounded-md px-3 py-2 space-x-3 w-52'>
            <AiOutlineLoading3Quarters className='text-blue-600'/>
            <button className='text-blue-600'>Load More</button>
        </div>
    </div> </div>
    </div>
  )
}

export default Review