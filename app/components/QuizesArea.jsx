import React from 'react';
import QuizesCards from './QuizesCards';
import Link from 'next/link';
import useComponentContextProvider from '../contextApi';

const QuizesArea = () => {
  const { quizLists } = useComponentContextProvider();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
        gap-6 auto-rows-fr
        animate-fadeIn">
        {quizLists.map(item => (
            <QuizesCards
              key={item.id}
              singleQuiz = {item}
            />
           
        ))}
      </div>
    </div>
  );
};

export default QuizesArea;

