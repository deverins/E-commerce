import React from 'react'
import Cards from './Cards'

const Homepage = () => {
  return (
    <div className=''>
    <marquee className='text-center text-2xl font-bold' behavior="slow" direction="right">
    <h2>
        Welcome to our Store
    </h2>
    </marquee>
        <Cards />
    </div>
  )
}

export default Homepage