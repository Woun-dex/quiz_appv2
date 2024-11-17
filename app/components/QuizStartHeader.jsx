import React from 'react'
import useComponentContextProvider from '../contextApi'


const QuizStartHeader = () => {
    const {quizToStartObject} = useComponentContextProvider();
    const {selectQuizToStart} = quizToStartObject ; 
    const {title} = selectQuizToStart ;
    const { description } = selectQuizToStart ;

  return (
    <div>
        <div className=' flex flex-col gap-1'>
            <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl text-green-800 dark:text-green-600  '>{title}</h1>
            <p>{description}</p>
        </div>

    </div>
  )
}

export default QuizStartHeader