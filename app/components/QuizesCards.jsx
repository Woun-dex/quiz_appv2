/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react';
import useComponentContextProvider from '../contextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBars, faPencil, faTrash , faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const QuizesCards = ({ singleQuiz }) => {
  const { quizToStartObject , quizLists ,setQuizLists } = useComponentContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  const { title, description, questions } = singleQuiz;
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Calculate statistics using useMemo
  const statistics = useMemo(() => {
    return questions.reduce((acc, question) => ({
      totalAttempts: acc.totalAttempts + (question.statistics?.totalAttempts || 0),
      correctAttempts: acc.correctAttempts + (question.statistics?.correctAttempts || 0),
      incorrectAttempts: acc.incorrectAttempts + (question.statistics?.incorrectAttempts || 0)
    }), {
      totalAttempts: 0,
      correctAttempts: 0,
      incorrectAttempts: 0
    });
  }, [questions]);

  const successRate = useMemo(() => {
    return statistics.totalAttempts === 0 ? 0 : 
      Math.round((statistics.correctAttempts / statistics.totalAttempts) * 100);
  }, [statistics]);

  const handleModify = () => {
    // Add modify logic
    setShowMenu(false);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
    setShowMenu(false);
  };

  const confirmDelete = () => {
    const updatedQuizLists = quizLists.filter(quiz => quiz.id !== singleQuiz.id);
    setQuizLists(updatedQuizLists);
    setShowDeleteConfirm(false);
  };

  return (
    <div className="group relative bg-gradient-to-br from-green-800 to-green-900 
      rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
      w-full max-w-[280px]   min-h-[320px] overflow-hidden
      hover:scale-[1.02] hover:-translate-y-1">
      
      {/* Menu Button and Dropdown */}
      <div className="absolute right-4 top-4 z-20">
        <button 
          className="text-white hover:text-green-300 transition-colors duration-200"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-950 shadow-xl 
            border border-green-800/20 overflow-hidden">
            <button 
              onClick={handleModify}
              className="w-full px-4 py-2 text-left text-white hover:bg-green-950 
                flex items-center gap-2 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faPencil} className="h-4 w-4 text-green-800" />
              Modify Quiz
            </button>
            <button 
              onClick={handleDelete}
              className="w-full px-4 py-2 text-left  hover:bg-green-950
                flex items-center gap-2 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTrash} className="h-4 w-4 text-red-800" />
              Delete Quiz
            </button>
          </div>
        )}
      </div>

      {showDeleteConfirm && (
        <div className="absolute  inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-950 p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 border border-green-800/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Confirm Delete</h3>
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete "{title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 
                  transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 
                  transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Image */}
      <div className="relative p-6 flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
        <img
          src="vercel.svg"
          alt={`${title} illustration`}
          className="w-20 h-20 object-contain transform group-hover:scale-110 
            transition-transform duration-300 relative z-10"
        />
      </div>

      {/* Quiz Content */}
      <div className="p-6 space-y-4">
        <h1 className="text-white text-xl font-bold text-center tracking-wide 
          group-hover:text-green-300 transition-colors duration-300">
          {title}
        </h1>
        
        <p className="text-gray-300 text-sm text-center line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* Statistics Section */}
        <div className="pt-4 border-t border-green-800/30 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-300" />
              <span className="text-green-300 font-medium">
                Questions: {questions.length}
              </span>
            </div>
            <span className="text-green-300 font-medium">
              Attempts: {statistics.totalAttempts}
            </span>
          </div>

          {/* Attempts Statistics */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-green-300">
                Correct: {statistics.correctAttempts}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-red-300">
                Wrong: {statistics.incorrectAttempts}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-green-950 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-green-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${successRate}%` }}
              />
            </div>
            <p className="text-green-300 text-xs text-center">
              Success Rate: {successRate}%
            </p>
          </div>

          {/* Start Button */}
          <Link 
            href="/Quiz-start/quiz"
            onClick={() => setSelectQuizToStart(singleQuiz)}
            className="block w-full"
          >
            <div className="flex justify-center items-center mt-4">
              <span className="bg-green-700 rounded-full p-2 w-10 h-10 
                flex items-center justify-center hover:bg-green-600 
                transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faPlay} className="text-white text-sm" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizesCards;