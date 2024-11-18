"use client"
import React, { useState }  from 'react'
import useComponentContextProvider from '../../contextApi'
import QuizStartHeader from '../../components/QuizStartHeader'
import QuizStartMain from '../../components/QuizStartMain'

const Page = () => {
  const  {quizLists , quizToStartObject } = useComponentContextProvider();
  const {selectQuizToStart} = quizToStartObject ; 
  const [ parentTime , setParentTime ] = useState(30);

  function onUpdateTimer(currentTime) {
    setParentTime(currentTime);
  }

  return (
    <div className='m-10'>
      <div>
        <QuizStartHeader parentTime={parentTime} />
      </div>
      <div>
        <QuizStartMain onUpdateTimer={onUpdateTimer} />
      </div>
    </div>
  )
}

export default Page