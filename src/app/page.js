import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <>
        <HomeHeader />

        <div className='flex flex-col items-center mt-24'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
            height={100}
            width={300}
            alt='google image'
            style={
              {
                // width: 'auto',
                // height: 'auto',
              }
            }
          />
          <HomeSearch />
        </div>
      </>
    </>
  )
}

export default Home
