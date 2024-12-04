import React from 'react'

const Revenue = () => {
  return (
    <div>
        <div className='bg-white p-4 mt-8 rounded-md shadow-xl'>
            <div className='flex justify-between items-center'>
            <p className='text-lg font-bold '>Service Revenue Breakdown</p>
            <p className='text-lg font-bold'>Total Revenue (This Month): $25,000</p>
            </div>
            {/*  */}
            <div className='bg-gray-200 rounded-lg p-3 shadow-lg flex justify-between items-center mt-7'>
                <div >
                    <p className='font-bold text-lg'>VAT Returns</p>
                    <p className='text-gray-500 text-sm'>here is revenue breakdown of VAT returns</p>
                </div>
                <p className='text-2xl font-extrabold'>$8,000</p>
            </div>
            {/*  */}
            <div className='bg-gray-200 rounded-lg p-3 shadow-lg flex justify-between items-center mt-4'>
                <div >
                    <p className='font-bold text-lg'>Payroll Management</p>
                    <p className='text-gray-500 text-sm'>here is revenue breakdown of VAT returns</p>
                </div>
                <p className='text-2xl font-extrabold'>$6,500</p>
            </div>
            {/*  */}
            <div className='bg-gray-200 rounded-lg p-3 shadow-lg flex justify-between items-center mt-4'>
                <div >
                    <p className='font-bold text-lg'>Company Tax</p>
                    <p className='text-gray-500 text-sm'>here is revenue breakdown of VAT returns</p>
                </div>
                <p className='text-2xl font-extrabold'>$10,500</p>
            </div>
        </div>
    </div>
  )
}

export default Revenue