"use client"
import React, { useState } from 'react'
import QuizCreateNav from "../components/Creaate Quiz/QuizCreateNav"
import QuizCreateTitle from "../components/Creaate Quiz/QuizCreateTitle"
import QuizCreateQuestions from "../components/Creaate Quiz/QuizCreateQuestions"
import { v4 as uuidv4 } from 'uuid';



const Page = () => {
  const [newDeck , setNewDeck] = useState(
    {
      id: uuidv4(),
      title: "",
      description: '',
      questions: [] 
    },
  );
  return (
    <div className='container px-4 py-8'>
        <QuizCreateNav />
        <QuizCreateTitle  newDeck={newDeck} setNewDeck={setNewDeck} />
        <QuizCreateQuestions newDeck={newDeck} setNewDeck={setNewDeck}  />
    </div>
  )
}

export default Page