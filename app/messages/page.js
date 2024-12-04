import Chat from '@/components/chat'
import React from 'react'

const Message = () => {
  return (
    <div>
        <div className='flex justify-end'>
            <button className='bg-blue-500 text-white px-3 py-1 rounded-lg text-sm'> + New Messages</button>
        </div>
        <Chat/>
    </div>
  )
}

export default Message