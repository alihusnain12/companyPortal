import Review from '@/components/review'
import React from 'react'
import { BiStar } from 'react-icons/bi'

const Feedback = () => {
  return (
    <div>
        <div className='bg-white rounded-md shadow-xl p-4'>
            <p className='font-bold text-lg'>Good Morning,jack</p>
            <p className='text-sm text-gray-500 pt-1'>Here is the feedback of clients..you can review and request for revision </p>
        </div>
        {/*  */}
        <div className='bg-white p-4 rounded-md shadow-xl mt-8 flex space-x-3'>
            <div className='bg-pink-200 flex justify-center items-center p-4 rounded-sm'>
                <p className='text-xl font-bold'>4.5</p>
            </div>
            <div >
                <div className='flex space-x-2'>
                    <BiStar className='text-yellow-500'/>
                    <BiStar className='text-yellow-500'/>
                    <BiStar className='text-yellow-500'/>
                    <BiStar className='text-yellow-500'/>
                    <BiStar className='text-yellow-500'/>
                </div>
                <p className='font-semibold'>4.5 Star Average Rating</p>
                <p className='text-gray-500'>644,653 People Writed Review</p>
            </div>
        </div>
        {/* reviews */}
        <Review/>
    </div>
  )
}

export default Feedback