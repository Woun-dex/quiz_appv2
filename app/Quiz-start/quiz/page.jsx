"use client"
import React  from 'react'
import useComponentContextProvider from '../../contextApi'
import QuizStartHeader from '../../components/QuizStartHeader'
import QuizStartMain from '../../components/QuizStartMain'
const Page = () => {
  const  {quizLists , quizToStartObject } = useComponentContextProvider();
  const {selectQuizToStart} = quizToStartObject ; 
  console.log(selectQuizToStart);
  return (
    <div className='m-10'>
      <div>
      <QuizStartHeader />
      </div>
      <div>
        <QuizStartMain />
      </div>
      
    
      

    </div>
  )
}

export default Page