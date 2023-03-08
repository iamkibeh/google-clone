'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

const HomeSearch = () => {
  const [userInput, setUserInput] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userInput.trim()) return
    router.push(`/search/web?search-term=${userInput}`)
  }

  const handleRandomSearch = async () => {
    setLoading(true)

    const response = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await response.json().then((data) => data[0])
    if (!data) return
    router.push(`/search/web?search-term=${data}`)
    setLoading(false)
  }
  return (
    <>
      <form
        className='w-full flex mx-auto rounded-full hover:shadow-md transition-shadow border border-gray-200 py-3 px-5 focus-within:shadow-md sm:max-w-xl lg:max-w-2xl max-w-[90%] mt-5'
        onSubmit={(e) => handleSubmit(e)}
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input
          type='text'
          className='focus:outline-none flex-grow'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <BsFillMicFill className='text-xl' />
      </form>
      <div className='flex flex-col space-y-2 mt-8 sm:flex-row sm:space-y-0 sm:space-x-2'>
        <button onClick={(e) => handleSubmit(e)} className='btn'>
          Google
        </button>
        <button
          disabled={loading}
          className='btn flex justify-center items-center disabled:opacity-60'
          onClick={handleRandomSearch}
        >
          {loading ? (
            <Image
              src='spinner.svg'
              alt='loading...'
              className='text-center h-9'
              width={50}
              height={20}
            />
          ) : (
            "I'm feeling lucky"
          )}
        </button>
      </div>
    </>
  )
}

export default HomeSearch
