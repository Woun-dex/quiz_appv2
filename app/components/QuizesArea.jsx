import React from 'react';
import QuizesCards from './QuizesCards';
import Link from 'next/link';
import useComponentContextProvider from '../contextApi';

const QuizesArea = () => {
  const { quizLists } = useComponentContextProvider();

  return (
    <div className="container mx-auto px-1 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 
        gap-3 auto-rows-fr
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

