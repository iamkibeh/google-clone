import WebSearchResults from '@/components/WebSearchResults'
import Link from 'next/link'

const WebSearchPage = async ({ searchParams }) => {
  const searchTerm = searchParams['search-term']

  // console.log(searchTerm)
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${searchTerm}`
  )

  if (!response.ok) {
    throw new Error('Something went wrong!')
  }
  const data = await response.json()

  // console.log(data)

  const results = data.items

  if (!results) {
    return (
      <div className='flex flex-col justify-center items-start p-4 text-gray-800'>
        <p className='text-sm mt-4'>
          Your search - <span className='font-semibold'>{searchTerm}</span> -
          did not match any documents.
        </p>
        <br></br>
        <p className='text-sm mb-2'>Suggestions:</p>
        <ul className='list-disc text-sm ml-8'>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
        {/* something else or go back home.{' '} */}
        <Link
          href='/'
          className='text-blue-500 hover:underline cursor-pointer text-sm text-center w-full mt-8'
        >
          Home
        </Link>
      </div>
    )
  }
  return (
    <>
      <div className=''>{results && <WebSearchResults results={data} />}</div>
    </>
  )
}

export default WebSearchPage
