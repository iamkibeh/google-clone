'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function PaginationButtons() {
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const searchTerm = searchParams.get('search-term')
  // const startIndex = +searchParams.get('start') || 1
  const startIndex = parseInt(searchParams.get('start')) || 1

  // console.log(typeof startIndex)
  return (
    <div className='flex justify-between text-blue-800 sm:justify-start sm:space-x-36'>
      {startIndex > 10 && (
        <Link
          href={`${pathName}?search-term=${searchTerm}&start=${
            startIndex - 10
          }`}
        >
          <div className='flex flex-col cursor-pointer items-center group'>
            <BsChevronLeft className='h-5' />
            <p className='text-xs group-hover:underline'>previous</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link
          href={`${pathName}?search-term=${searchTerm}&start=${
            startIndex + 10
          }`}
        >
          <div className='flex flex-col cursor-pointer items-center group'>
            <BsChevronRight className='h-5' />
            <p className='text-xs group-hover:underline'>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}
