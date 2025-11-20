import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-2xl'>
      <p className='mb-4 text-gray-400'>404 - Page Not Found</p>
      <Link to='/' className='text-blue-500 text-lg'>Go to Home</Link>
    </div>
  )
}

export default Notfound