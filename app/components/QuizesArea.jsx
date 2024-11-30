import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Changed to free-solid-svg-icons
import QuizesCards from './QuizesCards';
import useComponentContextProvider from '../contextApi';

const QuizesArea = () => {
  const { quizLists } = useComponentContextProvider();

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-fr">
        {quizLists.map(item => (
          <QuizesCards key={item.id} singleQuiz={item} />
        ))}
        
        <Link 
          href="/create-quiz" 
          className="flex flex-col items-center justify-center 
            border-2 border-dashed border-gray-300 
            rounded-xl p-4 
            hover:border-gray-500 
            transition-colors 
            group"
        >
          <FontAwesomeIcon 
            icon={faPlus} 
            className="text-gray-400 group-hover:text-gray-600 mb-2 text-2xl" // Changed size-12 to text-2xl for better scaling
          />
          <span className="text-gray-500 group-hover:text-gray-700">
            Add New Quiz
          </span>
        </Link>
      </div>
    </div>
  );
};

export default QuizesArea;