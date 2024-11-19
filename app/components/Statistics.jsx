import React from 'react';

const Statistics = ({ correctAttempts, total}) => {
  const percentage = Math.round((correctAttempts / total) * 100);


  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-4xl mx-auto bg-black/50 rounded-2xl p-8 shadow-2xl border border-green-800">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Quiz Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black p-6 rounded-xl border border-green-800">
            <div className="text-green-800 text-lg mb-2">Correct Answers</div>
            <div className="text-3xl font-bold text-white">{correctAttempts}</div>
          </div>

          <div className="bg-black p-6 rounded-xl border border-green-800">
            <div className="text-green-800 text-lg mb-2">Total Questions</div>
            <div className="text-3xl font-bold text-white">{total}</div>
          </div>

          <div className="bg-black col-start-1 col-end-3  p-6 rounded-xl border border-green-800">
            <div className="text-green-800 text-lg mb-2">Success Rate</div>
            <div className="text-3xl font-bold text-white">
              {percentage}%
              <div className="w-full bg-green-800/20 h-2 rounded-full mt-2">
                <div 
                  className="bg-green-800 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

        </div>

        {/* Frequently Answered Questions Section */}
        

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Retry Quiz
          </button>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-black text-green-800 border border-green-800 rounded-lg hover:bg-green-800/10 transition-all duration-300"
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;