import FeedbackSummary from '@/components/feedbackAnd Table'
import React from 'react'

const TeamManagement = () => {
  return (
    <div>
      <div className='bg-white p-3 rounded-md shadow-lg flex justify-between'>
      <div>
        <p className='text-lg font-bold'>Good morning, Jake</p>
        <p className='text-sm text-gray-500 pt-6'>Here is the team management process </p>
      </div>
      <div className='space-x-4'>
        <button className='border rounded-md px-3 py-1  text-sm'>Leave Coment</button>
        <button className='border rounded-md px-3 py-1 text-sm '>+  Add Member</button>
        <button className='border rounded-md px-3 py-1  text-sm'>+ Assign Task</button>
      </div>
      </div>
      {/* warning */}
      <div className='bg-[#D3FCD2] rounded-md shadow-lg p-4 mt-7 flex justify-between'>
        <div>
          <p className='font-bold'>Note</p>
          <p className='text-sm p-2'>comment of john on admin msg:    Almost done, waiting for approval from the client.</p>
        </div>
        <div>
       <button className='bg-[#22C55E29] rounded-md text-white text-xs px-2 py-1'>Dismiss</button>
       </div>
      </div>
      {/* cards */}
      <div className='bg-white p-6 rounded-md shadow-xl mt-7 pb-5'>
      <p className='text-lg font-bold'>Todays Summary</p>
      <p className='text-gray-500 text-sm pt-2'>Job summary</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5'>
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
      </div>
    </div>
    {/* table and feedback */}
    <FeedbackSummary/>
    </div>
  )
}

export default TeamManagement