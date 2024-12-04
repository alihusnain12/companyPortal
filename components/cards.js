import React from 'react'

const Cards = () => {
  return (
    <div className='bg-white p-3 rounded-md shadow-xl mt-7 pb-5'>
      <p className='text-lg font-bold'>Todays Summary</p>
      <p className='text-gray-500 text-sm pt-2'>Job summary</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5'>
        <div className='bg-[#FFEFF18C] rounded-md p-6 flex justify-center items-center flex-col text-center h-32'>
          <p className='text-xl font-semibold'>Total Leads</p>
          <p className='font-extrabold text-3xl'>45</p>
        </div>
        <div className='bg-[#DFFFE5] rounded-md p-6 flex justify-center items-center flex-col text-center h-32'>
          <p className='text-xl font-semibold'>Completed Tasks</p>
          <p className='font-extrabold text-3xl'>30</p>
        </div>
        <div className='bg-[#FFD3D3] rounded-md p-6 flex justify-center items-center flex-col text-center h-32'>
          <p className='text-xl font-semibold'>Pending Tasks</p>
          <p className='font-extrabold text-3xl'>10</p>
        </div>
        <div className='bg-[#FFEBCC] rounded-md p-6 flex justify-center items-center flex-col text-center h-32'>
          <p className='text-xl font-semibold'>New Clients</p>
          <p className='font-extrabold text-3xl'>5</p>
        </div>
        <div className='bg-[#CCEBFF] rounded-md p-6 flex justify-center items-center flex-col text-center h-32'>
          <p className='text-xl font-semibold'>Revenue</p>
          <p className='font-extrabold text-3xl'>15%</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
