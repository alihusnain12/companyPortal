import React from 'react';

const TeamManagement3 = () => {
  return (
    <div>
      <div className='bg-white rounded-md shadow-lg p-4'>
        <p className='text-lg font-bold'>Good morning, Jake</p>
        <p className='text-gray-500 pt-1 text-sm'>Here is the team management process</p>
      </div>
      {/* large */}
      <div className='bg-white rounded-lg shadow-xl p-4 mt-8'>
        <p className='font-bold text-xl'>Team Settings</p>
        <div className='flex justify-between '>
          <div className='flex-1'>
            <div className='flex space-x-20 items-center mt-7'>
              <p>Image</p>
              <div className='border border-dashed rounded px-6 py-10 bg-gray-100 border-black'>
                <p className='text-gray-500 text-xs text-center'>Click to replace or drag and drop</p>
                <p className='text-gray-500 text-xs text-center'>SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
              </div>
            </div>
            <div className='mb-4 mt-5'>
              <label className='font-bold '>Email</label>
              <input placeholder='Enter Here' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4'>
              <label className='font-bold '>Salary</label>
              <select className='border p-2 rounded-md w-full mt-2'>
                <option>500$</option>
                <option>510$</option>
              </select>
            </div>
            <div className='mb-4 '>
              <label className='font-bold '>Role</label>
              <input placeholder='Manager' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4 '>
              <label className='font-bold '>bank details</label>
              <textarea placeholder='Enter Here' className='border p-2 rounded-md w-full mt-2 h-32' />
            </div>
            <div className='mb-4 mt-10'>
              <label className='font-bold '>Availability</label>
              <input placeholder='sunday' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4 '>
              <input placeholder='Monday' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4 '>
              <input placeholder='Tuesday' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4 '>
              <input placeholder='Wednesday' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4 '>
              <input placeholder='Thursday' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4 '>
              <input placeholder='Friday' className='border p-2 rounded-md w-full mt-2' />
            </div>
            <div className='mb-4 '>
              <input placeholder='Saturday' className='border p-2 rounded-md w-full mt-2' />
            </div>
            {/* checkboxes */}
            <p className='font-semibold mt-12'>Compliance Checklist</p>
            <div className='mb-4 flex items-center space-x-5 mt-10'>
              <input type='checkbox' />
              <p className='text-gray-500 text-sm'>Data Security & Access Control</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Regulatory Compliance (GDPR, CCPA, etc.)</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Internal Communication & Collaboration</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
          </div>
          {/* 2 */}
          <div className='flex-1 ml-10 mt-7 '>
          <div className='mb-4 '>
              <label className='font-bold '>Name</label>
              <input placeholder='Enter Here' className='border p-2 rounded-md w-full mt-2' />
            </div>
            {/*  */}
            <div className='mb-4 '>
              <label className='font-bold '>Address</label>
              <input placeholder='Enter Here' className='border p-2 rounded-md w-full mt-2' />
            </div>
            {/*  */}
            <div className='mb-4 '>
              <label className='font-bold '>Phone Number</label>
              <input placeholder='Enter Here' className='border p-2 rounded-md w-full mt-2' />
            </div>
            {/*  */}
            <div className='mb-4 '>
              <label className='font-bold '>rota(duty)</label>
              <input placeholder='Enter Here' className='border p-2 rounded-md w-full mt-2' />
            </div>
            {/* access control */}
            <p className='font-semibold mt-12'>Access Control</p>
            <div className='mb-4 flex items-center space-x-5 mt-10'>
              <input type='checkbox' />
              <p className='text-gray-500 text-sm'>Data Security & Access Control</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Regulatory Compliance (GDPR, CCPA, etc.)</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Internal Communication & Collaboration</p>
            </div>
            <div className='mb-4 flex items-center space-x-5'>
              <input type='checkbox'  />
              <p className='text-gray-500 text-sm'>Data Privacy Management</p>
            </div>
          </div>
        </div>
        {/* button */}
        <div className='flex justify-end mt-10'>
        <button className='bg-blue-400 rounded-md text-white py-2 px-4 w-96'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default TeamManagement3;
