"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const QuizCreateQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "",
      answers: [
        { id: "A", text: "" },
        { id: "B", text: "" },
      ],
    },
  ]);

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      title: "",
      answers: [
        { id: "A", text: "" },
        { id: "B", text: "" },
      ],
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionChange = (questionIdx, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIdx].title = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (questionIdx, answerIdx, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIdx].answers[answerIdx].text = value;
    setQuestions(updatedQuestions);
  };

  const addAnswer = (questionIdx) => {
    const updatedQuestions = [...questions];
    const currentAnswers = updatedQuestions[questionIdx].answers;
    if (currentAnswers.length < 4) {
      const letters = ["A", "B", "C", "D"];
      const newAnswer = { id: letters[currentAnswers.length], text: "" };
      updatedQuestions[questionIdx].answers.push(newAnswer);
      setQuestions(updatedQuestions);
    }
  };

  const deleteAnswer = (questionIdx, answerIdx) => {
    if (questions[questionIdx].answers.length > 2) {
      const updatedQuestions = [...questions];
      updatedQuestions[questionIdx].answers = updatedQuestions[questionIdx].answers.filter(
        (_, idx) => idx !== answerIdx
      );

      // Reassign letters to remaining answers
      const letters = ["A", "B", "C", "D"];
      updatedQuestions[questionIdx].answers.forEach((answer, idx) => {
        answer.id = letters[idx];
      });

      setQuestions(updatedQuestions);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 rounded-xl space-y-8 dark:bg-gray-900">
      {questions.map((question, questionIdx) => (
        <div
          key={question.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4 
            border border-gray-200 dark:border-gray-700"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Question {questionIdx + 1}
            </h2>
          </div>

          <textarea
            value={question.title}
            onChange={(e) => handleQuestionChange(questionIdx, e.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-600 
              p-3 focus:border-green-500 focus:ring-2 focus:ring-greeb-200 
              dark:focus:ring-greeb-800 transition-all duration-200 min-h-[100px]
              resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Enter your question..."
          />

          <div className="space-y-3">
            {question.answers.map((answer, answerIdx) => (
              <div key={answer.id} className="flex items-center gap-4">
                <span className="font-semibold text-gray-700 dark:text-gray-200 w-8">
                  {answer.id}.
                </span>
                <input
                  type="text"
                  value={answer.text}
                  onChange={(e) => handleAnswerChange(questionIdx, answerIdx, e.target.value)}
                  className="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 
                    p-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 
                    dark:focus:ring-green-800 transition-all duration-200
                    bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                    placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={`Enter answer ${answer.id}...`}
                />
                {answerIdx >= 2 && (
                  <button
                    onClick={() => deleteAnswer(questionIdx, answerIdx)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 
                      dark:hover:text-red-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}

            {question.answers.length < 4 && (
              <button
                onClick={() => addAnswer(questionIdx)}
                className="text-green-500 hover:text-green-700 dark:text-green-400 
                  dark:hover:text-green-300 transition-colors mt-2"
              >
                <FontAwesomeIcon icon={faPlus} className="h-4 w-4" /> Add Answer
              </button>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={addQuestion}
        className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 
          dark:bg-green-700 dark:hover:bg-green-800
          text-white font-semibold rounded-xl flex items-center justify-center gap-2 
          transition-colors"
      >
        <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
        Add Question
      </button>
      <div>
      <button className='py-3 px-4 bg-green-700 hover:bg-green-800 
            text-white font-bold rounded-xl flex items-center justify-center gap-2 
            transition-colors'>Create New Quiz</button>
      </div>
    </div>
  );
};

export default QuizCreateQuestions;
