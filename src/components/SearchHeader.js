import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WebSearchBox from './WebSearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchOptions from './SearchOptions'

export default function SearchHeader() {
  return (
    <>
      <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center justify-between'>
          <Link href='/'>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
              height={30}
              width={92}
              alt='google image'
              style={{
                width: '92',
                height: 'auto',
              }}
            />
          </Link>
          <div className='flex-1'>
            <WebSearchBox />
          </div>
          <div className='hidden md:flex md:items-center space-x-2'>
            <RiSettings3Line className='header-icon' />
            <TbGridDots className='header-icon' />
          </div>
          <button className='bg-blue-500 text-[#fff] rounded-md px-5 py-2 sm:text-sm font-medium hover:brightness-105 hover:shadow-md transition-all ml-2 text-xs '>
            Sign Up
          </button>
        </div>
        <div className=''>
          <SearchOptions />
        </div>
      </header>
    </>
  )
}
