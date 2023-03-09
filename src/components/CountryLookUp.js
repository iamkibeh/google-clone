'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function CountryLookUp() {
  const [country, setCountry] = useState('')

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setCountry(data.country))
    }
    getCountry()
  }, [])

  return (
    <div>
      <p>
        {country ? (
          country
        ) : (
          <Image
            src='spinner.svg'
            alt='loading...'
            className='text-center h-9'
            width={50}
            height={10}
            style={{
              width: 'auto',
              height: 'h-9',
            }}
          />
        )}
      </p>
    </div>
  )
}
