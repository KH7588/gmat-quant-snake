import React from 'react';
import { UserResponse } from '../types';
import { Flag, ListRestart } from 'lucide-react';

interface SummaryScreenProps {
  responses: UserResponse[];
  onReviewAll: () => void;
  onReviewFlagged: () => void;
  isPracticeMode: boolean;
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({ responses, onReviewAll, onReviewFlagged, isPracticeMode }) => {
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 bg-white flex flex-col relative h-full">
      <div className="flex-1 overflow-y-auto p-8 mb-[25px]">
        <h2 className="text-2xl font-verdana font-bold text-gray-800 mb-6 text-center">Exam Summary</h2>
        
        {/* Changed max-w-4xl mx-auto to w-full to match Question page width */}
        <div className="w-full border border-gray-300 rounded-sm overflow-hidden">
          <table className="w-full text-sm font-verdana text-left">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="py-3 px-6 font-semibold text-gray-700">Q #</th>
                <th className="py-3 px-6 font-semibold text-gray-700">Your Answer</th>
                <th className="py-3 px-6 font-semibold text-gray-700">Correct Answer</th>
                {!isPracticeMode && (
                  <th className="py-3 px-6 font-semibold text-gray-700">Time Taken</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {responses.map((response) => (
                <tr key={response.questionNumber} className="hover:bg-gray-50">
                  <td className="py-3 px-6 text-gray-800 font-medium">
                    {response.questionNumber}
                    {response.isFlagged && <Flag size={12} className="inline ml-2 text-red-500 fill-current" />}
                  </td>
                  <td className={`py-3 px-6 font-bold ${response.isCorrect ? 'text-green-600' : (response.selectedOption ? 'text-red-600' : 'text-gray-400')}`}>
                    {response.selectedOption || "Skipped"}
                  </td>
                  <td className="py-3 px-6 text-gray-800">
                    {response.correctAnswer}
                  </td>
                  {!isPracticeMode && (
                    <td className="py-3 px-6 text-gray-600 font-mono">
                      {response.timeSpent > 0 ? formatTime(response.timeSpent) : "－"}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Specific Footer - Matched to Footer.tsx styles (h-[25px]) */}
      <div className="bg-[#4299e1] text-white h-[25px] flex items-center justify-between px-4 text-sm fixed bottom-0 w-full z-20">
         <div className="flex items-center space-x-6 h-full">
          {/* Empty left side for consistency, help button removed */}
        </div>

        <div className="flex items-center space-x-4 h-full">
          <button 
            onClick={onReviewAll}
            className="flex items-center space-x-1 hover:bg-blue-600 px-2 rounded transition h-full"
          >
            <ListRestart size={12} />
            <span className="leading-none font-semibold">Review All</span>
          </button>

          <button 
            onClick={onReviewFlagged}
            className="flex items-center space-x-1 hover:bg-blue-600 px-2 rounded transition h-full"
          >
            <Flag size={12} />
            <span className="leading-none font-semibold">Review Flagged/Wrong</span>
          </button>
        </div>
      </div>
    </div>
  );
};