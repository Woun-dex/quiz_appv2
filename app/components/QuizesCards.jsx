/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from 'react';
import useComponentContextProvider from '../contextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const QuizesCards = ({ singleQuiz}) => {
  const {quizToStartObject} = useComponentContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  const { title, description, questions } = singleQuiz;
  const totalQuestions = questions.length;
  
  // Calculate statistics
  const statistics = useMemo(() => {
    return questions.reduce((acc, question) => {
      return {
        totalAttempts: acc.totalAttempts + (question.statistics?.totalAttempts || 0),
        correctAttempts: acc.correctAttempts + (question.statistics?.correctAttempts || 0),
        incorrectAttempts: acc.incorrectAttempts + (question.statistics?.incorrectAttempts || 0)
      };
    }, {
      totalAttempts: 0,
      correctAttempts: 0,
      incorrectAttempts: 0
    });
  }, [questions]);

  // Calculate success rate
  const successRate = useMemo(() => {
    if (statistics.totalAttempts === 0) return 0;
    return Math.round((statistics.correctAttempts / statistics.totalAttempts) * 100);
  }, [statistics]);

  return (
    <div className="group relative bg-gradient-to-br from-green-800 to-green-900 
      rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out 
      w-full max-w-[280px] min-h-[320px] backdrop-blur-sm
      hover:scale-[1.02] hover:-translate-y-1
      dark:from-green-900 dark:to-green-950 mx-auto">

      {/* Image Section */}
      <div className="relative p-6 flex justify-center items-center
        after:absolute after:inset-0 after:bg-gradient-to-t after:from-green-900/50 after:to-transparent">
        <img
          src="vercel.svg"
          alt="Quiz Illustration"
          className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-300
            drop-shadow-lg z-10"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <h1 className="text-white text-xl font-bold text-center
          tracking-wide group-hover:text-green-300 transition-colors duration-300">
          {title}
        </h1>
        
        <p className="text-gray-300 text-sm text-center line-clamp-2
          leading-relaxed group-hover:text-gray-200">
          {description}
        </p>
        
        <div className="pt-4 border-t border-green-800/30 space-y-3">
          {/* Questions Count */}
          <div className="flex items-center justify-between text-sm">
            <p className="text-green-300 font-medium flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-300"></span>
              Questions: {totalQuestions}
            </p>
            <p className="text-green-300 font-medium">
              Attempts: {statistics.totalAttempts}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-green-300">Correct: {statistics.correctAttempts}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
              <span className="text-red-300">Wrong: {statistics.incorrectAttempts}</span>
            </div>
          </div>
          
                    {/* Success Rate Progress Bar */}
          <div className="space-y-1">
            <div className="w-full bg-green-950 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${successRate}%` }}
              />
            </div>
            <p className="text-green-300 text-xs text-center">
              Success Rate: {successRate}%
            </p>
            <div 
            className='flex justify-center items-center mt-2' 
            onClick={() => setSelectQuizToStart(singleQuiz)}
            >
              <span className='bg-green-700 rounded-full p-2 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors duration-300'>
                <Link href="/Quiz-start/quiz" >
                <FontAwesomeIcon icon={faPlay} className="fa-fw text-white text-sm" />
                </Link>
              </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizesCards;