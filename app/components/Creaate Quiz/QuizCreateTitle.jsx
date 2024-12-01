import React from 'react';

const QuizCreateTitle = ({ newDeck, setNewDeck }) => {
  const handleTitleChange = (value) => {
    setNewDeck((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleDescriptionChange = (value) => {
    setNewDeck((prev) => ({
      ...prev,
      description: value,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 flex flex-col gap-2">
      {/* Title Input */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <label
          htmlFor="DeckTitle"
          className="text-gray-700 dark:text-slate-200 font-medium text-lg sm:w-1/4 sm:pt-2"
        >
          Deck Title:
        </label>
        <textarea
          value={newDeck.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          id="DeckTitle"
          className="w-full sm:w-3/4 bg-transparent text-black dark:text-slate-200 rounded-lg border border-gray-200 
            px-4 py-3 text-gray-700 placeholder-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
            transition-all duration-200
            resize-none"
          placeholder="Enter your Deck title..."
        />
      </div>

      {/* Description Input */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <label
          htmlFor="DeckDescription"
          className="text-gray-700 dark:text-slate-200 font-medium text-lg sm:w-1/4 sm:pt-2"
        >
          Description:
        </label>
        <textarea
          value={newDeck.description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
          id="DeckDescription"
          className="w-full sm:w-3/4 bg-transparent text-black dark:text-slate-200 rounded-lg border border-gray-200 
            px-4 py-3 text-gray-700 placeholder-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
            transition-all duration-200
            resize-none"
          placeholder="Enter your Deck description..."
        />
      </div>
    </div>
  );
};

export default QuizCreateTitle;
