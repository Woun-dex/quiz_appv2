'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import QuizesArea from '../components/QuizesArea';
import { ComponentsContext } from '../contextApi';

const Page = () => {
  const [quizLists, setQuizList] = useState([]);

  const addNewQuiz = () => {
    const newQuiz = [
      {
        id: 0,
        title: 'Geography',
        description: 'This is my first quiz',
        questions: [
          {
            id: 0,
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            answer: 'Paris',
          },
          {
            id: 1,
            question: 'Who is the current Prime Minister of India?',
            options: ['Modi', 'Narendra Modi', 'Rahul Gandhi', 'Dr. Ramesh Modi'],
            answer: 'Narendra Modi',
          },
          {
            id: 2,
            question: 'What is the name of the largest city in the world?',
            options: ['New York', 'Tokyo', 'London', 'Berlin'],
            answer: 'Tokyo',
          },
        ],
        statistics: {
          correctAnswers: 5,
          score: 100,
          percentage: 100,
        },
      },
      {
        id: 1,
        title: 'History',
        description: 'A quiz about historical events and figures.',
        questions: [
          {
            id: 0,
            question: 'Who was the first President of the United States?',
            options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
            answer: 'George Washington',
          },
          {
            id: 1,
            question: 'What year did World War II end?',
            options: ['1945', '1939', '1941', '1948'],
            answer: '1945',
          },
          {
            id: 2,
            question: 'Who discovered America in 1492?',
            options: ['Christopher Columbus', 'Leif Erikson', 'Ferdinand Magellan', 'Amerigo Vespucci'],
            answer: 'Christopher Columbus',
          },
        ],
        statistics: {
          correctAnswers: 3,
          score: 80,
          percentage: 80,
        },
      },
      {
        id: 2,
        title: 'Science',
        description: 'Test your knowledge of science and nature.',
        questions: [
          {
            id: 0,
            question: 'What is the chemical symbol for water?',
            options: ['H2O', 'O2', 'H2', 'CO2'],
            answer: 'H2O',
          },
          {
            id: 1,
            question: 'Which planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
            answer: 'Mars',
          },
          {
            id: 2,
            question: 'What is the speed of light?',
            options: ['300,000 km/s', '150,000 km/s', '299,792 km/s', '400,000 km/s'],
            answer: '299,792 km/s',
          },
        ],
        statistics: {
          correctAnswers: 4,
          score: 90,
          percentage: 90,
        },
      },
      {
        id: 3,
        title: 'Movies',
        description: 'A quiz for movie buffs.',
        questions: [
          {
            id: 0,
            question: 'Which movie won the Best Picture Oscar in 1994?',
            options: ['Forrest Gump', 'Pulp Fiction', 'The Shawshank Redemption', 'Four Weddings and a Funeral'],
            answer: 'Forrest Gump',
          },
          {
            id: 1,
            question: 'Who played Jack in Titanic?',
            options: ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Tom Cruise'],
            answer: 'Leonardo DiCaprio',
          },
          {
            id: 2,
            question: 'What is the highest-grossing movie of all time?',
            options: ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars: The Force Awakens'],
            answer: 'Avatar',
          },
        ],
        statistics: {
          correctAnswers: 6,
          score: 95,
          percentage: 95,
        },
      },

    ];
    setQuizList((prev) => [...prev, ...newQuiz]);
  };

  useEffect(() => {
    if (quizLists.length === 0) {
    }
  }, []); 

  return (
    <ComponentsContext.Provider value={{ quizLists, setQuizList }}>
      <div className="px-4 py-10">
        <h1 className="text-4xl font-bold">My Quizzes</h1>
        {quizLists.length === 0 ? (
          <div className="flex flex-col justify-center h-1/2 items-center gap-2">
            <Image
              src="/inbox.svg"
              alt="Empty state"
              width={200}
              height={200}
            />
            <p className="font-bold text-xl">No quizzes available! Make one.</p>
            <p className="text-sm mb-4">Click below to begin your journey here..</p>
            <button className="btn text-sm" onClick={addNewQuiz}>
              Create my first quiz
            </button>
          </div>
        ) : (
          <QuizesArea />
        )}
      </div>
    </ComponentsContext.Provider>
  );
};

export default Page;
