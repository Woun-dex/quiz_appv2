"use client"
import React, { useState }  from 'react'
import useComponentContextProvider from '../../contextApi'
import QuizStartHeader from '../../components/QuizStartHeader'
import QuizStartMain from '../../components/QuizStartMain'

const Page = () => {
  const  {quizLists , quizToStartObject } = useComponentContextProvider();
  const {selectQuizToStart} = quizToStartObject ; 
  const [ parentTime , setParentTime ] = useState(20);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  function onUpdateTimer(currentTime) {
    setParentTime(currentTime);
  }

  return (
    <div className='m-10'>
      <div>
        <QuizStartHeader parentTime={parentTime} isQuizCompleted={isQuizCompleted} />
      </div>
      <div>
        <QuizStartMain onUpdateTimer={onUpdateTimer} isQuizCompleted={isQuizCompleted} setIsQuizCompleted={setIsQuizCompleted} />
      </div>
    </div>
  )
}

export default Page