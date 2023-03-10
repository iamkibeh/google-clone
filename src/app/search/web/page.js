const WebSearchPage = async ({ searchParams }) => {
  const searchTerm = searchParams['search-term']

  console.log(searchTerm)
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${searchTerm}`
  )
  const data = await response.json()

  // console.log(data)

  const results = data.items
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
