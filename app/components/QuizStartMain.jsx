/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from 'react';
import useComponentContextProvider from '../contextApi';

const QuizStartMain = ({ onUpdateTimer }) => {
    const { quizToStartObject } = useComponentContextProvider();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
    const [timer, setTimer] = useState();
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    useEffect(() => {
        if (!quizToStartObject || isQuizCompleted) return;

        setTimer(30);
        const timerInterval = setInterval(() => {
            setTimer((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerInterval);
                    handleTimeUp();
                    return 0;
                }
                const newTime = prevTime - 1;
                if (onUpdateTimer) {
                    onUpdateTimer(newTime);
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [currentQuestionIndex, quizToStartObject, isQuizCompleted]);

    if (!quizToStartObject) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    const { selectQuizToStart } = quizToStartObject;
    const { questions } = selectQuizToStart || {};

    if (!questions || questions.length === 0) {
        return <div className="text-white text-center mt-10">No questions available</div>;
    }

    const quiz = questions[currentQuestionIndex];

    if (!quiz) {
        return <div className="text-white text-center mt-10">Invalid question index</div>;
    }

    const handleTimeUp = () => {
        quiz.statistics.incorrectAttempts++;
        quiz.statistics.totalAttempts++;
        
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedChoiceIndex(null);
        } else {
            setIsQuizCompleted(true);
            alert("Quiz completed!");
        }
    };

    const handleSubmit = () => {
        if (selectedChoiceIndex === null) {
            alert("Please select an answer before submitting.");
            return;
        }

        if (selectedChoiceIndex === quiz.answer) {
            alert("You are correct!");
            quiz.statistics.correctAttempts++;
            quiz.statistics.totalAttempts++;
        } else {
            alert("Wrong answer!");
            quiz.statistics.incorrectAttempts++;
            quiz.statistics.totalAttempts++;
        }

        setSelectedChoiceIndex(null);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsQuizCompleted(true);
            alert("Quiz completed!");
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="p-8 rounded-lg shadow-lg w-auto text-left">
                <div className="flex justify-between items-center mb-4 gap-1">
                    <h1 className="text-3xl font-bold">{quiz.mainQuestion}</h1>
                    
                    <div className="text-2xl font-bold text-green-800">
                        {timer}s
                    </div>
                </div>
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
                                value={index}
                                className="hidden"
                                onChange={() => setSelectedChoiceIndex(index)}
                            />
                            {choice}
                        </label>
                    ))}
                </div>
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={handleSubmit}
                        className="bg-green-900 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-200"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizStartMain;