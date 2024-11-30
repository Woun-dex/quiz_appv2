/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react';
import useComponentContextProvider from '../contextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisVertical, faPencil, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const QuizesCards = ({ singleQuiz }) => {
  const { quizToStartObject, quizLists, setQuizLists } = useComponentContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  const { title, description, questions } = singleQuiz;
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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
    setShowMenu(false);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
    setShowMenu(false);
  };

  const confirmDelete = () => {
    setQuizLists(quizLists.filter(quiz => quiz.id !== singleQuiz.id));
    setShowDeleteConfirm(false);
  };

  return (
    <div className="relative bg-slate-100 dark:bg-gray-900 rounded-2xl shadow-sm 
      hover:shadow-lg transition-all duration-300 w-full max-w-[300px] overflow-hidden">
      
      {/* Menu */}
      <div className="absolute right-3 top-3 z-20">
        <button 
          className="p-4 text-white hover:text-slate-300 dark:text-gray-400 
            dark:hover:text-gray-200 transition-colors"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} className="h-5 w-5" />
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-800 
            shadow-lg border border-gray-100 dark:border-gray-700">
            <button 
              onClick={handleModify}
              className="w-full px-4 py-3 text-left text-gray-700 dark:text-gray-200 
                hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faPencil} className="h-4 w-4" />
              Modify Quiz
            </button>
            <button 
              onClick={handleDelete}
              className="w-full px-4 py-3 text-left text-red-600 hover:bg-gray-50 
                dark:hover:bg-gray-700 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
              Delete Quiz
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-6 bg-green-700 p-4 rounded-lg">
          <img
            src="vercel.svg"
            alt={`${title} illustration`}
            className="w-16 h-16 mx-auto object-contain"
          />
        </div>

        <h1 className="text-gray-900 dark:text-white text-lg font-semibold mb-2 
          text-center">
          {title}
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center 
          line-clamp-2 mb-6">
          {description}
        </p>

        {/* Stats */}
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Questions: {questions.length}</span>
            <span>Attempts: {statistics.totalAttempts}</span>
          </div>

          {/* Progress */}
          <div className="relative h-2 bg-gray-100 dark:bg-gray-800 rounded-full 
            overflow-hidden">
            <div 
              className="absolute h-full bg-green-500 rounded-full transition-all 
                duration-500"
              style={{ width: `${successRate}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>Correct: {statistics.correctAttempts}</span>
            <span>{successRate}%</span>
            <span>Wrong: {statistics.incorrectAttempts}</span>
          </div>
        </div>

        {/* Start Button */}
        <Link 
          href="/Quiz-start/quiz"
          onClick={() => setSelectQuizToStart(singleQuiz)}
        >
          <button className="mt-6 w-full py-3 px-4 bg-green-700 hover:bg-green-800 
            text-white rounded-xl flex items-center justify-center gap-2 
            transition-colors">
            <FontAwesomeIcon icon={faPlay} className="h-4 w-4" />
            Start Quiz
          </button>
        </Link>
      </div>

      {/* Delete Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl 
            max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Confirm Delete</h3>
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 
                  dark:hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete "{title}"?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 
                  dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 
                  rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizesCards;