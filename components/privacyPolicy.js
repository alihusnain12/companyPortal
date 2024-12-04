import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className='bg-white rounded-lg shadow-xl p-5 flex flex-col lg:flex-row '>
        <div className='flex-none lg:w-1/4 pr-0 lg:pr-6'>
          <p className='text-sm text-gray-600'>Type your question or search keyword</p>
          <div className='border rounded p-2 flex items-center space-x-4 my-6'>
            <BiSearch />
            <input className="flex-grow" placeholder='Search' />
          </div>
          <p className='text-blue-400 border-b mb-3 text-sm my-3'>Getting Started</p>
          <p className='text-gray-500 text-sm border-b my-3'>My Profile</p>
          <p className='text-gray-500 text-sm border-b my-3'>Applying for a Service</p>
          <p className='text-gray-500 text-sm border-b my-3'>Get Benefits</p>
          <div className='bg-blue-500 rounded p-3 mt-12 lg:mt-32'>
            <p className='text-white font-semibold'>Didnot find what you were looking for?</p>
            <p className='text-white text-sm pt-2'>Contact our customer service</p>
            <button className='bg-white text-blue-500 px-3 py-1 mt-4'>Contact Us</button>
          </div>
        </div>
        <div className='flex-1 mt-6 lg:mt-0'>
          <div className='flex items-center mb-4'>
            <p className='text-gray-500 text-sm'>Sort by:</p>
            <p className='ml-2 font-medium'>Most Relevant</p>
          </div>
          <div className='border rounded-md p-3 mt-5'>
            <p className='font-bold text-lg mb-3'>What is My Applications?</p>
            <p className='text-gray-500 text-xs mb-4'>My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.</p>
            <div className='border-b'></div>
            <div className='flex items-center space-x-3 mt-4'>
              <p>Was this article helpful?</p>
              <div className='flex items-center space-x-2'>
                <div className='border px-2 py-1 flex items-center rounded-md text-blue-400 space-x-1'>
                  <AiOutlineLike />
                  <span>Yes</span>
                </div>
                <div className='border px-2 py-1 flex items-center rounded-md text-blue-400 space-x-1'>
                  <BiDislike />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
          <div className='border rounded-md p-3 mt-5'>
            <p className='font-bold text-lg mb-3'>How to access my applications history</p>
            <p className='text-gray-500 text-xs mb-4'>To access your application history, go to the applications section, and you can view the status of all your applications there.</p>
            <div className='border-b'></div>
            <div className='flex items-center space-x-3 mt-4'>
              <p>Was this article helpful?</p>
              <div className='flex items-center space-x-2'>
                <div className='border px-2 py-1 flex items-center rounded-md text-blue-400 space-x-1'>
                  <AiOutlineLike />
                  <span>Yes</span>
                </div>
                <div className='border px-2 py-1 flex items-center rounded-md text-blue-400 space-x-1'>
                  <BiDislike />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
          <div className='border rounded-md p-3 mt-5'>
            <p className='font-bold text-lg mb-3'>How to make a lead?</p>
            <p className='text-gray-500 text-xs mb-4'>Making a lead involves identifying potential clients and initiating contact to offer services or products.</p>
            <div className='border-b'></div>
            <div className='flex items-center space-x-3 mt-4'>
              <p>Was this article helpful?</p>
              <div className='flex items-center space-x-2'>
                <div className='border px-2 py-1 flex items-center rounded-md text-blue-400 space-x-1'>
                  <AiOutlineLike />
                  <span>Yes</span>
                </div>
                <div className='border px-2 py-1 flex items-center rounded-md text-blue-400 space-x-1'>
                  <BiDislike />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
