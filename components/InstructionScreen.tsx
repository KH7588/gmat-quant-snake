import React from 'react';
import { Timer, MonitorPlay } from 'lucide-react';

interface InstructionScreenProps {
  onStart: (isPracticeMode: boolean) => void;
  title: string;
}

export const InstructionScreen: React.FC<InstructionScreenProps> = ({ onStart, title }) => {
  const [mode, setMode] = React.useState<'timed' | 'practice'>('timed');

  return (
    <div className="flex-1 bg-white p-8 overflow-y-auto flex flex-col items-center">
      <div className="max-w-3xl w-full mt-10">
        <h1 className="text-2xl font-verdana font-bold text-gray-800 mb-10 text-center">{title}</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="font-verdana text-sm text-gray-700">
            Please select your preferred mode for this problem set. 
            This setting only applies to the current session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Timed Mode Card */}
          <div 
            onClick={() => setMode('timed')}
            className={`cursor-pointer border-2 rounded-sm p-6 transition-all relative ${
              mode === 'timed' 
                ? 'border-blue-500 bg-blue-50/50 shadow-md ring-1 ring-blue-500' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center mb-4 border-b border-gray-200 pb-3">
              <Timer className={`w-5 h-5 mr-2 ${mode === 'timed' ? 'text-blue-600' : 'text-gray-500'}`} />
              <h3 className="font-verdana font-bold text-base text-gray-800">Timed Mode</h3>
            </div>
            <ul className="list-disc pl-5 space-y-3 font-verdana text-sm text-gray-600 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-800">Timer:</span> Active. You can click the timer to hide/show it.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Strict Navigation:</span> You <span className="font-bold text-red-600">must answer</span> the current question to proceed. The "Next" button is disabled otherwise.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Reporting:</span> Time taken per question is recorded.
              </li>
            </ul>
          </div>

          {/* Practice Mode Card */}
          <div 
            onClick={() => setMode('practice')}
            className={`cursor-pointer border-2 rounded-sm p-6 transition-all relative ${
              mode === 'practice' 
                ? 'border-green-500 bg-green-50/50 shadow-md ring-1 ring-green-500' 
                : 'border-gray-200 hover:border-green-300'
            }`}
          >
            <div className="flex items-center mb-4 border-b border-gray-200 pb-3">
              <MonitorPlay className={`w-5 h-5 mr-2 ${mode === 'practice' ? 'text-green-600' : 'text-gray-500'}`} />
              <h3 className="font-verdana font-bold text-base text-gray-800">Practice Mode</h3>
            </div>
            <ul className="list-disc pl-5 space-y-3 font-verdana text-sm text-gray-600 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-800">Timer:</span> Hidden. No countdown or pressure.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Flexible Navigation:</span> You can proceed to the next question <span className="font-bold text-green-600">without answering</span>.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Reporting:</span> Time taken is NOT recorded in the summary.
              </li>
            </ul>
          </div>
        </div>

        {/* Start Button Area */}
        <div className="flex justify-center">
          <button
            onClick={() => onStart(mode === 'practice')}
            className="bg-[#3182ce] hover:bg-[#2b6cb0] text-white font-verdana font-bold py-3 px-16 rounded shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-lg tracking-wide"
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
};