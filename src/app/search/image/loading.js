import React from 'react'

export default function loading() {
  return (
    <div className='flex flex-wrap pt-10 mx-2 lg:pl-52 max-w-6xl sm:space-x-4 flex-col sm:flex-row pb-40  z-0'>
      <div className='animate-pulse'>
        <div className='bg-gray-200 rounded-md mb-4 h-48 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2.5 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2 w-36'></div>
      </div>
      <div className='animate-pulse'>
        <div className='bg-gray-200 rounded-md mb-4 h-48 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2.5 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2 w-36'></div>
      </div>
      <div className='animate-pulse'>
        <div className='bg-gray-200 rounded-md mb-4 h-48 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2.5 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2 w-36'></div>
      </div>
      <div className='animate-pulse'>
        <div className='bg-gray-200 rounded-md mb-4 h-48 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2.5 w-48'></div>
        <div className='bg-gray-200 rounded-md mb-2.5 h-2 w-36'></div>
      </div>
    </div>
  )
}
