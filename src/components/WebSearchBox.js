'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

const WebSearchBox = () => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search-term') || ''
  const [searchTerm, setSearchTerm] = useState(searchQuery)
  const route = useRouter()

  const handleTermSubmit = (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    route.push(`/search/web?search-term=${searchTerm}`)
  }

  return (
    <>
      <form
        className='flex border border-gray-200 rounded-full shadow-md px-6 py-1 ml-10 mr-5 flex-grow max-w-xl items-center'
        onSubmit={handleTermSubmit}
      >
        <input
          type='text'
          className='w-full text-sm text-gray-700 rounded-l-full focus:outline-none px-1'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <RxCross2
          className='text-2xl text-gray-500 cursor-pointer sm:mr-4'
          onClick={() => setSearchTerm('')}
        />
        <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300  cursor-pointer' />
        <AiOutlineSearch
          className='text-2xl hidden sm:inline-flex cursor-pointer text-blue-500 ml-4'
          onClick={handleTermSubmit}
        />
      </form>
    </>
  )
}

export default WebSearchBox
