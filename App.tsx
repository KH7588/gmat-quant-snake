import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header.tsx';
import { SubHeader } from './components/SubHeader.tsx';
import { QuestionArea } from './components/QuestionArea.tsx';
import { Footer } from './components/Footer.tsx';
import { SummaryScreen } from './components/SummaryScreen.tsx';
import { InstructionScreen } from './components/InstructionScreen.tsx';
import { ConfirmationModal } from './components/ConfirmationModal.tsx';
import { Question, AppState, AppMode, UserResponse } from './types';
import { APP_CONFIG } from './data/config';
import { getExamStatus, ExamStatus } from './data/schedule';
import { loadExamQuestions } from './data/examLoaders.ts';

// --- DEVELOPMENT MODE ---
// Set this to 'A1', 'A2', etc. to force that exam to display, ignoring the schedule.
// Set to null for production schedule mode.
const DEV_MODE_EXAM_ID = 'A1';

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.LOADING);
  
  // Start in INSTRUCTION mode unless locked
  const [mode, setMode] = useState<AppMode>(AppMode.INSTRUCTION);
  
  const [examStatus, setExamStatus] = useState<ExamStatus | null>(null);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  
  // Data State
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentExamQuestions, setCurrentExamQuestions] = useState<Record<number, Question> | null>(null); // Store current exam's questions
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [currentFlag, setCurrentFlag] = useState(false);
  
  // Review Queue State
  const [reviewQueue, setReviewQueue] = useState<number[]>([]);
  // Fix: Corrected useState declaration
  const [reviewIndex, setReviewIndex] = useState(0);

  // Timer State
  const [remainingTime, setRemainingTime] = useState(APP_CONFIG.timeLimitMinutes * 60);
  const [questionStartTime, setQuestionStartTime] = useState(APP_CONFIG.timeLimitMinutes * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false); // New state for timer pause
  
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false); // For submit confirmation
  const [showExitConfirmation, setShowExitConfirmation] = useState(false); // New state for exit confirmation
  
  const [fetchingNext, setFetchingNext] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Function to reset all relevant app states to initial values
  const resetAppState = () => {
    setAppState(AppState.READY); // Ready for instructions screen
    setMode(AppMode.INSTRUCTION);
    setIsPracticeMode(false);
    setCurrentQuestion(null);
    setCurrentExamQuestions(null); // Clear loaded questions
    setSelectedOption(null);
    setResponses([]);
    setCurrentFlag(false);
    setReviewQueue([]);
    setReviewIndex(0);
    setRemainingTime(APP_CONFIG.timeLimitMinutes * 60); // Reset timer
    setQuestionStartTime(APP_CONFIG.timeLimitMinutes * 60);
    setQuestionNumber(1);
    setShowConfirmation(false);
    setIsTimerPaused(false); // Ensure timer is not paused on reset
    setShowExitConfirmation(false);
    setFetchingNext(false);

    if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }
    // No need to reload examStatus here as it's typically static or loaded once.
  };

  // Check Schedule on Mount
  useEffect(() => {
    let status = getExamStatus();

    // FORCE OVERRIDE IN DEV MODE
    if (DEV_MODE_EXAM_ID) {
      status = {
        isOpen: true,
        examId: DEV_MODE_EXAM_ID,
        message: "DEV MODE",
        title: `GMAT Quant Snake ${DEV_MODE_EXAM_ID}`
      };
    }

    setExamStatus(status);

    if (status.isOpen && status.examId) {
       setAppState(AppState.READY);
    } else {
       // If no dev mode and no open exam, default to instruction screen but effectively locked
       setAppState(AppState.READY); 
       setMode(AppMode.EXAM); // Set to exam mode, but the render logic for locked state will handle it
       if (!DEV_MODE_EXAM_ID && !status.isOpen) {
       } else if (!DEV_MODE_EXAM_ID && status.isOpen) {
         console.warn("No exam specified in DEV_MODE_EXAM_ID and no active scheduled exam. Showing empty screen.");
       }
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer Logic
  useEffect(() => {
    // Stop timer if:
    // - In Summary, Review, Instruction mode
    // - In Practice Mode
    // - Timer is explicitly paused
    // - Exam is not open (and not in dev mode)
    if (
      mode === AppMode.SUMMARY || 
      mode === AppMode.REVIEW || 
      mode === AppMode.INSTRUCTION ||
      isPracticeMode || 
      isTimerPaused ||
      (!examStatus?.isOpen && !DEV_MODE_EXAM_ID)
    ) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Only start timer if it's not already running, we are in EXAM mode, and not paused
    if (!timerRef.current && mode === AppMode.EXAM && !isTimerPaused) { 
       timerRef.current = window.setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 0) {
            if (timerRef.current) clearInterval(timerRef.current);
            // Optionally: automatically submit exam when time runs out
            // For now, just stop at 0
            return 0; 
          }
          return prev - 1;
        });
      }, 1000);
    }
    // Cleanup function for useEffect
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [mode, examStatus, isPracticeMode, isTimerPaused]);

  const loadNewQuestion = async (qNum: number, specificExamId?: string) => {
    const activeExamId = specificExamId || examStatus?.examId;
    if (!activeExamId) {
      setAppState(AppState.ERROR); // No exam ID available
      console.error("No active exam ID to load questions from.");
      return;
    }

    setFetchingNext(true);
    // Only reset question start time if not paused (i.e. if timer is running)
    if (!isTimerPaused) { 
      setQuestionStartTime(remainingTime); 
    }
    
    try {
      let q: Question | null = null;
      let questionsForCurrentExam = currentExamQuestions;

      // If questions for this exam are not yet loaded, load them
      if (!questionsForCurrentExam || Object.keys(questionsForCurrentExam).length === 0) {
        questionsForCurrentExam = await loadExamQuestions(activeExamId);
        setCurrentExamQuestions(questionsForCurrentExam); // Store for future use
      }
      
      if (questionsForCurrentExam && questionsForCurrentExam[qNum]) {
        q = questionsForCurrentExam[qNum];
      } else {
        if (qNum > APP_CONFIG.totalQuestions) {
          setMode(AppMode.SUMMARY); // End of questions, go to summary
          return;
        } else {
          setAppState(AppState.ERROR);
          console.error(`Question ${qNum} not found for exam ${activeExamId}.`);
          return;
        }
      }
      
      if (q) {
        setCurrentQuestion(q);
        setAppState(AppState.READY);
        setSelectedOption(null);
        setCurrentFlag(false);
      }
    } catch (e) {
      console.error("Error loading question:", e);
      setAppState(AppState.ERROR);
    } finally {
      setFetchingNext(false);
    }
  };

  const handleStartExam = (practice: boolean) => {
    setIsPracticeMode(practice);
    setMode(AppMode.EXAM);
    setIsTimerPaused(false); // Ensure timer starts unpaused
    // Load Question 1 when START is clicked
    loadNewQuestion(1, examStatus?.examId);
  };

  const handleNext = () => {
    if (mode === AppMode.EXAM) {
      if (isPracticeMode) {
        recordResponseAndProceed();
      } else {
        if (selectedOption) {
          setShowConfirmation(true); // Show submit confirmation for timed mode
        }
      }
      return;
    }

    if (mode === AppMode.REVIEW) {
      const nextIndex = reviewIndex + 1;
      if (nextIndex < reviewQueue.length) {
        setReviewIndex(nextIndex);
        const qNum = reviewQueue[nextIndex];
        setQuestionNumber(qNum);
        loadNewQuestion(qNum, examStatus?.examId || undefined); 
      } else {
        setMode(AppMode.SUMMARY);
      }
    }
  };

  const recordResponseAndProceed = () => {
    if (!currentQuestion) return;

    const timeSpent = Math.max(0, questionStartTime - remainingTime);

    const response: UserResponse = {
      questionId: currentQuestion.id,
      questionNumber: questionNumber,
      selectedOption: selectedOption,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: selectedOption === currentQuestion.correctAnswer,
      timeSpent: timeSpent,
      isFlagged: currentFlag
    };

    setResponses(prev => [...prev, response]);

    if (questionNumber >= APP_CONFIG.totalQuestions) {
      setMode(AppMode.SUMMARY);
    } else {
      const nextNum = questionNumber + 1;
      setQuestionNumber(nextNum);
      loadNewQuestion(nextNum, examStatus?.examId || undefined);
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmation(false);
    recordResponseAndProceed();
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  const handleOptionSelect = (label: string) => {
    if (mode === AppMode.EXAM) {
      setSelectedOption(label);
    }
  };

  const handleToggleFlag = () => {
    setCurrentFlag(!currentFlag);
  };

  const handleTogglePause = () => {
    if (mode === AppMode.EXAM && !isPracticeMode) {
      setIsTimerPaused(prev => !prev);
    }
  };

  const handleExit = () => {
    setShowExitConfirmation(true);
  };

  const startReviewAll = () => {
    const queue = Array.from({ length: APP_CONFIG.totalQuestions }, (_, i) => i + 1);
    setReviewQueue(queue);
    setReviewIndex(0);
    setMode(AppMode.REVIEW);
    setIsTimerPaused(true); // Pause timer during review
    setQuestionNumber(queue[0]);
    loadNewQuestion(queue[0], examStatus?.examId || undefined);
  };

  const startReviewFlagged = () => {
    const queue = responses
      .filter(r => r.isFlagged || !r.isCorrect)
      .map(r => r.questionNumber)
      .sort((a, b) => a - b);
    
    if (queue.length === 0) {
      alert("No flagged or incorrect questions to review!");
      return;
    }

    setReviewQueue(queue);
    setReviewIndex(0);
    setMode(AppMode.REVIEW);
    setIsTimerPaused(true); // Pause timer during review
    setQuestionNumber(queue[0]);
    loadNewQuestion(queue[0], examStatus?.examId || undefined);
  };

  // --- RENDER: LOCKED / CLOSED STATE (or no DEV_MODE_EXAM_ID and no open scheduled exam) ---
  if (!DEV_MODE_EXAM_ID && appState === AppState.READY && (!examStatus?.isOpen)) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 font-sans p-8">
        <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-md w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{examStatus?.title || "GMAT Quant Snake"}</h1>
            
            <div className="mb-6">
                <div className="text-6xl mb-2">🔒</div>
            </div>
            
            <p className="text-lg text-gray-600 font-medium mb-4">
               {examStatus?.message || "No exam is currently available or scheduled."}
            </p>
            
            <p className="text-sm text-gray-400">
               Access opens daily from 12:00 PM to 12:00 AM (if scheduled).
            </p>
            
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Refresh Status
            </button>
        </div>
      </div>
    );
  }

  // --- RENDER: LOADING ---
  if (appState === AppState.LOADING) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100 font-sans">
        <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Exam...</p>
        </div>
      </div>
    );
  }

  // --- RENDER: ERROR ---
  if (appState === AppState.ERROR) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-red-100 font-sans p-8">
        <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-md w-full">
            <h1 className="text-2xl font-bold text-red-800 mb-4">Error Loading Questions</h1>
            <p className="text-lg text-red-600 font-medium mb-4">
               There was an issue loading the questions for this exam. Please check the console for details or try again.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Reload Application
            </button>
        </div>
      </div>
    );
  }

  // --- RENDER: SUMMARY ---
  if (mode === AppMode.SUMMARY) {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
         <Header 
          title={examStatus?.title || APP_CONFIG.title}
          elapsedTime={remainingTime} 
          questionNumber={APP_CONFIG.totalQuestions}
          totalQuestions={APP_CONFIG.totalQuestions} 
          isPracticeMode={isPracticeMode}
        />
        <SubHeader 
          isFlagged={false} 
          onToggleFlag={() => {}} 
          disabled={true} 
        />
        <SummaryScreen 
          responses={responses} 
          onReviewAll={startReviewAll}
          onReviewFlagged={startReviewFlagged}
          isPracticeMode={isPracticeMode}
        />
        {/* Render Exit Confirmation Modal if needed during Summary */}
        <ConfirmationModal 
          isOpen={showExitConfirmation}
          onConfirm={resetAppState}
          onCancel={() => setShowExitConfirmation(false)}
          headerText="Confirmation"
          message="Are you sure you want to exit? Your progress will be lost."
        />
      </div>
    );
  }

  // --- RENDER: EXAM / REVIEW / INSTRUCTION ---
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <Header 
        title={examStatus?.title || APP_CONFIG.title}
        elapsedTime={remainingTime} 
        questionNumber={questionNumber}
        totalQuestions={APP_CONFIG.totalQuestions}
        isPracticeMode={isPracticeMode} 
      />
      
      <SubHeader 
        isFlagged={currentFlag}
        onToggleFlag={handleToggleFlag}
        disabled={mode === AppMode.REVIEW || mode === AppMode.INSTRUCTION} 
      />
      
      {mode === AppMode.INSTRUCTION ? (
        <InstructionScreen 
          title={examStatus?.title || APP_CONFIG.title}
          onStart={handleStartExam}
        />
      ) : (
        currentQuestion ? (
          <QuestionArea 
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelectOption={handleOptionSelect}
            mode={mode}
            userAnswer={mode === AppMode.REVIEW ? responses.find(r => r.questionNumber === questionNumber)?.selectedOption : null}
          />
        ) : (
          // This block handles the state when DEV_MODE_EXAM_ID is null or an exam is scheduled
          // but no questions are loaded yet (e.g., initial state of a new empty exam).
          <div className="flex-1 bg-white p-8 overflow-y-auto flex items-center justify-center text-gray-500 text-lg font-verdana">
            No questions loaded. Please start an exam or ensure a DEV_MODE_EXAM_ID is set and questions are available.
          </div>
        )
      )}
      
      {mode !== AppMode.INSTRUCTION && (
        <Footer 
          onNext={handleNext} 
          loading={fetchingNext}
          canProceed={
             mode === AppMode.REVIEW || 
             isPracticeMode || 
             (mode === AppMode.EXAM && selectedOption !== null)
          }
          onExit={handleExit}
          onTogglePause={handleTogglePause}
          isTimerPaused={isTimerPaused}
          isPracticeMode={isPracticeMode}
          isExamMode={mode === AppMode.EXAM}
        />
      )}

      {/* Confirmation Modal for submitting an answer */}
      <ConfirmationModal 
        isOpen={showConfirmation}
        onConfirm={handleConfirmSubmit}
        onCancel={handleCancelSubmit}
        headerText="Confirmation"
        message="You have selected an answer. Are you sure you want to proceed to the next question?"
      />

      {/* Confirmation Modal for exiting the exam */}
      <ConfirmationModal 
        isOpen={showExitConfirmation}
        onConfirm={resetAppState}
        onCancel={() => setShowExitConfirmation(false)}
        headerText="Confirmation"
        message="Are you sure you want to exit? Your progress will be lost."
      />
    </div>
  );
}