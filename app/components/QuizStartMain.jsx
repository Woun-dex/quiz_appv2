/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react';
import useComponentContextProvider from '../contextApi';

const QuizStartMain = () => {
    const { quizToStartObject } = useComponentContextProvider();

    if (!quizToStartObject) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    const { selectQuizToStart } = quizToStartObject;
    const { questions } = selectQuizToStart || {};

    if (!questions || questions.length === 0) {
        return <div className="text-white text-center mt-10">No questions available</div>;
    }

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null); // Track the index of the selected choice
    const quiz = questions[currentQuestionIndex];

    if (!quiz) {
        return <div className="text-white text-center mt-10">Invalid question index</div>;
    }

    const handleSubmit = () => {
        if (selectedChoiceIndex === null) {
            alert("Please select an answer before submitting.");
            return;
        }

        if (selectedChoiceIndex === quiz.answer) {
            alert("You are correct!");
        } else {
            alert("Wrong answer!");
        }

        // Reset selection and navigate if needed
        setSelectedChoiceIndex(null);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert("Quiz completed!");
        }
    };
    
//TODO: MAKE ONLY A SUBMIT BUTTON 
//TODO : MAKE RESULT COUNTER 
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="p-8 rounded-lg shadow-lg w-96 text-left">
                <h1 className="text-3xl font-bold mb-6">{quiz.mainQuestion}</h1>
                <div className="space-y-4">
                    {quiz.choices.map((choice, index) => (
                        <label
                            key={index}
                            className={`block py-3 px-5 rounded-lg cursor-pointer shadow-md transition-all duration-200 ${
                                selectedChoiceIndex === index
                                    ? 'bg-transparent outline outline-green-800 text-green-800'
                                    : 'bg-green-800 text-white hover:bg-green-700'
                            }`}
                        >
                            <input
                                type="radio"
                                name="quiz-option"
                                value={index} // Pass the index as the value
                                className="hidden"
                                onChange={() => setSelectedChoiceIndex(index)} // Update the selected choice index
                            />
                            {choice}
                        </label>
                    ))}
                </div>
                <div className="mt-8 flex justify-between">
                    {currentQuestionIndex > 0 && (
                        <button
                            onClick={() => {
                                setSelectedChoiceIndex(null); // Reset selection
                                setCurrentQuestionIndex(currentQuestionIndex - 1);
                            }}
                            className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-200"
                        >
                            Previous
                        </button>
                    )}
                    <button
                        onClick={handleSubmit}
                        className="bg-green-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-200"
                    >
                        {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizStartMain;
