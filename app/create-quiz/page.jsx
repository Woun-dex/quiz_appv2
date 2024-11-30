import React from 'react'
import QuizCreateNav from "../components/Creaate Quiz/QuizCreateNav"
import QuizCreateTitle from "../components/Creaate Quiz/QuizCreateTitle"
import QuizCreateQuestions from "../components/Creaate Quiz/QuizCreateQuestions"

const Page = () => {
  return (
    <div className='container px-4 py-8'>
        <QuizCreateNav />
        <QuizCreateTitle />
        <QuizCreateQuestions />
    </div>
  )
}

export default Page