import Link from 'next/link'
import React from 'react'

const QuizCreateNav = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Create Quiz</h1>
            <Link href='/Quiz-start' >
            Back
            </Link>
        </div>
    </div>
  )
}

export default QuizCreateNav