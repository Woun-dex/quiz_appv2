import React from 'react'

const QuizCreateTitle = () => {
  return (
    <div className='max-w-3xl mx-auto mt-8 p-6'>
      <div className='flex flex-col sm:flex-row sm:items-start gap-4'>
        <label 
          htmlFor='questionTitle'
          className='text-gray-700 dark:text-slate-200 font-medium text-lg sm:w-1/4 sm:pt-2'
        >
          Question Title:
        </label>
        <textarea 
          id='questionTitle'
          className='w-full sm:w-3/4  bg-transparent text-black dark:text-slate-200 rounded-lg border border-gray-200 
            px-4 py-3 text-gray-700 placeholder-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
            transition-all duration-200
            resize-none'
          placeholder='Enter your question title...'
        />
      </div>
    </div>
  )
}

export default QuizCreateTitle