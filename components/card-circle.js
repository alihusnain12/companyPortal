import Image from 'next/image';
import React from 'react';
import pic2 from "../app/public/cards.png";

const CardCircle = () => {
  return (
    <div className='mt-8 flex justify-between flex-col md:flex-row space-y-6 md:space-y-0'>
      {/* Current Invoice Card */}
      <div className='bg-white rounded-md shadow-lg p-4 flex-1 min-w-[300px]'>
        <h2 className='text-lg font-bold'>Current Invoice</h2>
        {/* Information */}
        <div className='flex justify-between mt-5 border-b mr-20'>
          <p className='font-semibold'>Information</p>
          <div>
            <p className='text-gray-500 text-sm'>
              Invoice: <span className='font-semibold'>INV-20241001</span>
            </p>
            <p className='text-gray-500 text-sm mb-6'>
              Client: <span className='font-semibold'>Acme Corp</span>
            </p>
          </div>
        </div>
        {/* Services */}
        <div className='flex justify-between mt-5 border-b mr-8'>
          <p className='font-semibold'>Service :</p>
          <div>
            <p className='text-gray-500 text-sm'>
              VAT Return Preparation: <span className='font-semibold'>$800</span>
            </p>
            <p className='text-gray-500 text-sm'>
              Payroll Management: <span className='font-semibold'> $400</span>
            </p>
            <p className='text-gray-500 text-sm'>
              Tax (5%): <span className='font-semibold'>  $60</span>
            </p>
            <p className='text-gray-500 text-sm mb-6'>
              Total: <span className='font-semibold'> $1,260</span>
            </p>
          </div>
        </div>
        {/* Payment */}
        <div className='flex justify-between mt-5 border-b '>
          <p className='font-semibold'>Payment History</p>
          <div className='mb-7'>
            <p className='text-gray-500 text-sm'>
              Paid: <span className='font-semibold'>$1,260</span> via <span className='font-semibold'> Credit Card on Oct 1, 2024</span>
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className='flex justify-end mt-10'>
          <div className='flex flex-col space-y-3'>
            <button className='border px-3 py-1 text-xs font-bold rounded-md border-black hover:bg-gray-100 transition'>
              Resend Invoice
            </button>
            <button className='bg-[#52BDCD] text-white rounded-md px-3 py-1 text-xs font-bold hover:bg-[#47a6b4] transition'>
              Download as PDF
            </button>
            <button className='bg-[#212B36] text-white rounded-md px-3 py-1 text-xs font-bold hover:bg-[#1b1e22] transition'>
              Mark as Paid
            </button>
          </div>
        </div>
      </div>

      {/* Additional Cards Section */}
      <div className='flex flex-col space-y-4 flex-1'>
        {/* Connected Cards */}
        <div className='bg-white rounded-md p-3 shadow-lg flex flex-col ml-2 h-56'>
          <p className='text-xl font-bold mb-2'>Connected Cards</p>
          <Image src={pic2} alt="Connected Cards" objectFit="contain" className='self-center' />
        </div>

        {/* Subscriptions Circle */}
        <div className='bg-white rounded-md shadow-lg p-3 flex flex-col h-64 ml-2'>
          <p className='text-lg font-semibold mb-2'>Subscriptions</p>
          <div className='flex  items-center'>
            <svg width="200" height="200">
              <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" strokeWidth="2rem" strokeDasharray="439.8" strokeDashoffset="0" />
              <circle r="70" cx="100" cy="100" fill="transparent" stroke="blue" strokeWidth="2rem" strokeDasharray="439.8" strokeDashoffset="66" />
            </svg>
            <div className='mt-4'>
              <div className='flex items-center space-x-2 mb-2'>
                <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                <span>Subscribed</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
                <span>Upcoming renewal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCircle;