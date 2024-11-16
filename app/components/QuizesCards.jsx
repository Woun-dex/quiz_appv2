import React from 'react';

const QuizesCards = ({ title, description, questions }) => {
  const totalQuestions = questions.length;

  return (
    <div className="bg-green-800 hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden sm:w-48 sm:h-58 md:w-64 md:h-72 flex flex-col justify-between">
      {/* Image Section */}
      <div className="bg-green-700 p-4 flex justify-center items-center">
        <img
          src="vercel.svg"
          alt="Quiz Illustration"
          width={20}
          height={20}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="px-4 pb-4 flex-grow flex flex-col justify-between">
        <h1 className="text-white text-lg font-bold text-center">{title}</h1>
        <p className="text-gray-300 text-sm text-center mt-2 line-clamp-2">
          {description}
        </p>
        <p className="text-green-300 text-sm text-center font-medium mt-4">
          Total Questions: {totalQuestions}
        </p>
      </div>
    </div>
  );
};

export default QuizesCards;
