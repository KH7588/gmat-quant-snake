import React from 'react';
import { ChevronRight, LogOut, Pause, Play } from 'lucide-react'; // Import new icons

interface FooterProps {
  onNext: () => void;
  loading: boolean;
  canProceed: boolean; // Controls whether Next is logically clickable
  onExit: () => void; // New prop for exit functionality
  onTogglePause: () => void; // New prop for pause/resume functionality
  isTimerPaused: boolean; // New prop for timer pause state
  isPracticeMode: boolean; // New prop to know if in practice mode
  isExamMode: boolean; // New prop to know if in actual exam mode (not instruction, summary etc.)
}

export const Footer: React.FC<FooterProps> = ({ 
  onNext, 
  loading, 
  canProceed, 
  onExit, 
  onTogglePause, 
  isTimerPaused, 
  isPracticeMode,
  isExamMode
}) => {
  return (
    <div className="bg-[#4299e1] text-white h-[25px] flex items-center justify-between px-4 text-sm fixed bottom-0 w-full z-20">
      <div className="flex items-center space-x-6 h-full">
        {/* Version Number for deployment verification */}
        <span className="text-xs text-blue-200 font-mono select-none">v1.3.1</span>
        
        {/* Exit Button */}
        <button 
          onClick={onExit}
          className="flex items-center space-x-1 px-2 h-full rounded transition hover:bg-blue-600 cursor-pointer"
        >
          <LogOut size={12} strokeWidth={2} />
          <span className="leading-none font-semibold">Exit</span>
        </button>

        {/* Pause/Resume Button - Only visible in Exam Mode and not in Practice Mode */}
        {isExamMode && !isPracticeMode && (
          <button 
            onClick={onTogglePause}
            className="flex items-center space-x-1 px-2 h-full rounded transition hover:bg-blue-600 cursor-pointer"
          >
            {isTimerPaused ? <Play size={12} fill="currentColor" /> : <Pause size={12} />}
            <span className="leading-none font-semibold">{isTimerPaused ? 'Resume' : 'Resume'}</span>
          </button>
        )}
      </div>

      <div className="flex items-center space-x-2 h-full">
        {loading && <span className="text-[10px] animate-pulse mr-2 leading-none">Loading...</span>}
        
        <div 
           className={`h-full flex items-center ${!canProceed && !loading ? 'cursor-not-allowed' : ''}`}
           title={!canProceed ? "You must select an answer to proceed" : ""}
        >
          <button 
            onClick={canProceed ? onNext : undefined}
            disabled={loading || !canProceed}
            className={`
              flex items-center space-x-1 font-semibold px-2 h-full rounded transition 
              ${loading ? 'opacity-50' : ''}
              ${!canProceed && !loading ? 'pointer-events-none opacity-50' : 'hover:bg-blue-600 cursor-pointer'}
            `}
          >
            <span className="leading-none">Next</span>
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};