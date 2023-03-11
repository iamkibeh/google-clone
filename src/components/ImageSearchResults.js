import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImageSearchResults = ({ results }) => {
  const data = results.items
  console.log(results)
  return (
    <div className='pb-24 pt-4'>
      <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4 p-3 sm:space-y-4'>
        {data?.map((result) => (
          <div key={result.link} className='max-w-xl mb-8 '>
            <div className='group flex flex-col'>
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className='h-60 group-hover:shadow-lg w-full object-contain transition-shadow'
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline truncate text-sm'>
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className='group-hover:underline text-gray-600'>
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSearchResults
