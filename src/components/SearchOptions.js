'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

export default function SearchOptions() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('search-term')

  const selectTab = (tab) => {
    if (tab === 'web') {
      router.push(`/search/web?search-term=${searchTerm}`)
    } else if (tab === 'images') {
      router.push(`/search/image?search-term=${searchTerm}`)
    }
  }
  return (
    <div className='flex space-x-2 border-b w-full justify-center lg:justify-start lg:pl-48 text-gray-800  text-xs'>
      <div
        onClick={() => selectTab('web')}
        className={`flex items-center space-x-1 border-b-4 active:text-blue-600 cursor-pointer pb-3 px-2 border-transparent ${
          pathname === '/search/web' && '!text-blue-600 !border-b-blue-600'
        }`}
      >
        <AiOutlineSearch className='text-md' />
        <p>All</p>
      </div>
      <div
        className={`flex items-center space-x-1 border-b-4 active:text-blue-600 cursor-pointer pb-3 px-2 border-transparent ${
          pathname === '/search/image' && '!text-blue-600 !border-b-blue-600'
        }`}
        onClick={() => selectTab('images')}
      >
        <AiOutlineCamera className='text-md' />
        <p>Images</p>
      </div>
    </div>
  )
}
