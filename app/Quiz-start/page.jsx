'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import QuizesArea from '../components/QuizesArea';
import useComponentContextProvide from '../contextApi';


const Page = () => {
 
  const { quizLists, setQuizLists } = useComponentContextProvide();
  

 

 


  return (
  
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
            <button className="btn text-sm" >
              Create my first quiz
            </button>
          </div>
        ) : (
          <QuizesArea />
        )}
      </div>
  );
};

export default Page;
