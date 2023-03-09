import React from 'react'
import CountryLookUp from './CountryLookUp'

export default function Footer() {
  return (
    <footer className='bg-[#f2f2f2] text-sm absolute bottom-0 w-full text-gray-500'>
      <div className='border-b-2 px-8 py-3'>
        <CountryLookUp />
      </div>
      <div className=' flex flex-col sm:flex-row sm:justify-between justify-center items-center space-y-7 sm:space-y-0 py-5 px-8'>
        <ul className='flex items-center space-x-6'>
          <li className='link'>About</li>
          <li className='link'>Advertising</li>
          <li className='link'>Business</li>
          <li className='link'>How Search works</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li className='link'>Privacy</li>
          <li className='link'>Terms</li>
          <li className='link'>Settings</li>
        </ul>
      </div>
    </footer>
  )
}
