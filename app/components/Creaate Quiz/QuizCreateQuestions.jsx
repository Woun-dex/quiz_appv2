"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import useComponentContextProvider from "../../contextApi";

const QuizCreateQuestions = ({ newDeck, setNewDeck }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const { quizLists, setQuizLists } = useComponentContextProvider();

  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      mainQuestion: "",
      choices: ["A. ", "B. "],
      answer: 0, // Index of the correct choice
      statistics: {
        totalAttempts: 0,
        correctAttempts: 0,
        incorrectAttempts: 0,
      },
    },
  ]);

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const addQuestion = () => {
    const newQuestion = {
      id: uuidv4(),
      mainQuestion: "",
      choices: ["A. ", "B. "],
      answer: 0,
      statistics: {
        totalAttempts: 0,
        correctAttempts: 0,
        incorrectAttempts: 0,
      },
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (questionId) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((q) => q.id !== questionId));
    }
  };

  const handleQuestionChange = (questionId, value) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId ? { ...q, mainQuestion: value } : q
      )
    );
  };

  const handleChoiceChange = (questionId, index, value) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const updatedChoices = [...q.choices];
          updatedChoices[index] = value;
          return { ...q, choices: updatedChoices };
        }
        return q;
      })
    );
  };

  const handleCorrectAnswerChange = (questionId, index) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId ? { ...q, answer: index } : q
      )
    );
  };

  const addChoice = (questionId) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId && q.choices.length < 4) {
          return { ...q, choices: [...q.choices, `Choice ${q.choices.length + 1}`] };
        }
        return q;
      })
    );
  };

  const deleteChoice = (questionId, index) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId && q.choices.length > 2) {
          const updatedChoices = q.choices.filter((_, i) => i !== index);
          return { ...q, choices: updatedChoices };
        }
        return q;
      })
    );
  };

  const validateForm = () => {
    if (questions.length === 0) {
      showAlertMessage("error", "The quiz must contain at least one question.");
      return false;
    }
    for (const question of questions) {
      if (!question.mainQuestion.trim()) {
        showAlertMessage("error", "A question is missing a title.");
        return false;
      }
      if (question.choices.some((choice) => !choice.trim())) {
        showAlertMessage("error", "One or more choices are empty.");
        return false;
      }
      if (
        question.answer === null ||
        question.answer >= question.choices.length
      ) {
        showAlertMessage("error", "Correct answer is not selected.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      showAlertMessage("success", "Quiz created successfully!");
      setNewDeck((prev) => ({
        ...prev,
        questions,
      }));

      try {
        const response = await axios.post(
          "http://localhost:3030/quizzes",
          { ...newDeck, questions }
        );
        setQuizLists([...quizLists, response.data]);
        showAlertMessage("success", "Quiz successfully saved to server.");
      } catch (error) {
        console.error("Error adding Quiz:", error);
        showAlertMessage("error", "Failed to save quiz. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 rounded-xl space-y-8 dark:bg-gray-900">
      {showAlert && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
            alertType === "success" ? "bg-green-500" : "bg-red-500"
          } text-white transition-opacity duration-300`}
        >
          {alertMessage}
        </div>
      )}

      {questions.map((question, questionIndex) => (
        <div
          key={question.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4 
            border border-gray-200 dark:border-gray-700"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Question {questionIndex + 1}
            </h2>
            {questions.length > 1 && (
              <button
                onClick={() => deleteQuestion(question.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 
                  dark:hover:text-red-300 transition-colors"
              >
                <FontAwesomeIcon icon={faTrash} className="h-5 w-5" />
              </button>
            )}
          </div>

          <textarea
            value={question.mainQuestion}
            onChange={(e) => handleQuestionChange(question.id, e.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-600 
              p-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 
              dark:focus:ring-green-800 transition-all duration-200 min-h-[100px]
              resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter your question..."
          />

          <div className="space-y-3">
            {question.choices.map((choice, index) => (
              <div key={index} className="flex items-center gap-4">
                <input
                  type="text"
                  value={choice}
                  onChange={(e) => handleChoiceChange(question.id, index, e.target.value)}
                  className="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 
                    p-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 
                    dark:focus:ring-green-800 transition-all duration-200
                    bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder={`Enter choice ${String.fromCharCode(65 + index)}...`}
                />
                {index >= 2 && (
                  <button
                    onClick={() => deleteChoice(question.id, index)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 
                      dark:hover:text-red-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}

            {question.choices.length < 4 && (
              <button
                onClick={() => addChoice(question.id)}
                className="text-green-500 hover:text-green-700 dark:text-green-400 
                  dark:hover:text-green-300 transition-colors mt-2"
              >
                <FontAwesomeIcon icon={faPlus} className="h-4 w-4" /> Add Choice
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              Correct Answer:
            </span>
            <select
              value={question.answer}
              onChange={(e) => handleCorrectAnswerChange(question.id, parseInt(e.target.value))}
              className="rounded-lg border border-gray-200 dark:border-gray-600 
                p-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 
                dark:focus:ring-green-800 transition-all duration-200
                bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value={-1}>Select correct answer</option>
              {question.choices.map((_, index) => (
                <option key={index} value={index}>
                  {String.fromCharCode(65 + index)}
                </option>
              ))}
            </select>
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
        <button
          onClick={handleSubmit}
          className="w-full py-3 px-4 bg-green-700 hover:bg-green-800 
            text-white font-bold rounded-xl flex items-center justify-center gap-2 
            transition-colors"
        >
          Create New Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCreateQuestions;
