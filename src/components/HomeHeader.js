import Link from 'next/link'
import { TbGridDots } from 'react-icons/tb'

const HomeHeader = () => {
  return (
    <>
      <header className='flex justify-end p-5'>
        <div className=' flex text-sm space-x-4 items-center'>
          <Link href='https://mail.google.com'>Gmail</Link>
          <Link href='https://images.google.com'>Image</Link>
          <TbGridDots className='bg-transparent hover:bg-gray-100 rounded-full text-4xl p-2' />
          <Link href='https://accounts.google.com/ServiceLogin/signinchooser?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
            <button className='bg-blue-500 hover:bg-blue-700 hover:shadow-md transition-shadow text-white  py-2 px-5 rounded-md font-medium '>
              Sign in
            </button>
          </Link>
        </div>
      </header>
    </>
  )
}

export default HomeHeader
