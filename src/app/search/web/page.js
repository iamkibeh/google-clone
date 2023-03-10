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
      <div className='flex flex-col justify-center items-center p-4'>
        <h1 className='mb-5 text-2xl '>Ooops! No results found.</h1>
        <p className='text-sm'>
          Try searching something else or go back home.{' '}
          <Link
            href='/'
            className='text-blue-500 hover:underline cursor-pointer'
          >
            Home
          </Link>
        </p>
      </div>
    )
  }
  return (
    <>
      <div className=''>
        {results &&
          results.map((result) => (
            <div key={result.link} className='max-w-xl mb-8'>
              {result.title}
            </div>
          ))}
      </div>
    </>
  )
}

export default WebSearchPage
