import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='  flex justify-between items-center px-4 py-3 '>
      <Link href='/'>
      <h1 className='font-bold'>Quiz App</h1>
      </Link>
        
    </div>
  )
}

export default Navbar