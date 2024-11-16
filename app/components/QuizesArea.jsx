import React , { useContext } from 'react'
import { ComponentsContext } from '../contextApi'
import QuizesCards from './QuizesCards';

const QuizesArea = () => {
    const  {quizLists} = useContext(ComponentsContext);


  return (
    <div className='mt-4 grid sm:grid-cols-3 lg:grid-cols-4 gap-2'>
        {quizLists.map(item => (
            <QuizesCards
            key = {item.id}
            title= {item.title} 
            description={item.description}
            questions={item.questions}
            />
            
        ))}
        
    </div>
  )
}

export default QuizesArea