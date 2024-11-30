import React from 'react'

const QuizCreateNav = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Create Quiz</h1>
            <button className='py-3 px-4 bg-green-700 hover:bg-green-800 
            text-white font-bold rounded-xl flex items-center justify-center gap-2 
            transition-colors'>Create New Quiz</button>
        </div>
    </div>
  )
}

export default QuizCreateNav