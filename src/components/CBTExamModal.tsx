import React, { useState, useEffect, useRef } from 'react';
import { ExamInfo, CBTQuestion, CBTExamResult } from '../types';
import { MOCK_QUESTIONS_MAP } from '../data/examsData';
import { 
  Clock, X, CheckCircle2, XCircle, AlertCircle, 
  ChevronLeft, ChevronRight, Calculator, Bookmark, 
  RotateCcw, ArrowRight, Award, Trophy, HelpCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CBTExamModalProps {
  exam: ExamInfo;
  isOpen: boolean;
  onClose: () => void;
  onSaveResult: (result: CBTExamResult, questions: CBTQuestion[]) => void;
  questionsMap?: Record<string, CBTQuestion[]>;
}

export const CBTExamModal: React.FC<CBTExamModalProps> = ({
  exam,
  isOpen,
  onClose,
  onSaveResult,
  questionsMap = MOCK_QUESTIONS_MAP,
}) => {
  // Load questions for selected exam or default
  const [questions, setQuestions] = useState<CBTQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedQuestions, setMarkedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(60 * 60); // 60 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<CBTExamResult | null>(null);
  const [showCalculator, setShowCalculator] = useState<boolean>(false);
  const [calcInput, setCalcInput] = useState<string>('');
  const [showReviewOnly, setShowReviewOnly] = useState<boolean>(false);

  // Initialize or reset exam
  useEffect(() => {
    if (isOpen) {
      const baseQuestions = questionsMap[exam.id] || questionsMap['info-processing'] || [];
      
      // If questions are fewer than 20, duplicate/re-index to simulate a realistic CBT test
      let fullQuestionSet: CBTQuestion[] = [];
      if (baseQuestions.length > 0) {
        // Repeat to make a 20-30 or 60 question CBT session
        const multiplier = Math.ceil(20 / baseQuestions.length);
        let idCounter = 1;
        for (let i = 0; i < multiplier; i++) {
          for (const q of baseQuestions) {
            fullQuestionSet.push({
              ...q,
              id: idCounter,
              year: q.year || '2024년 정기 기출'
            });
            idCounter++;
            if (fullQuestionSet.length >= 20) break;
          }
          if (fullQuestionSet.length >= 20) break;
        }
      }

      setQuestions(fullQuestionSet);
      setCurrentIndex(0);
      setUserAnswers({});
      setMarkedQuestions({});
      setTimeLeft(60 * 60);
      setIsSubmitted(false);
      setExamResult(null);
      setShowReviewOnly(false);
    }
  }, [isOpen, exam.id]);

  // Timer Effect
  useEffect(() => {
    if (!isOpen || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isSubmitted]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted && !showReviewOnly) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleToggleMark = () => {
    setMarkedQuestions((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
  };

  const handleSubmitExam = () => {
    let correctCount = 0;
    const wrongQuestionIds: number[] = [];

    questions.forEach((q) => {
      const selected = userAnswers[q.id];
      if (selected === q.answer) {
        correctCount++;
      } else {
        wrongQuestionIds.push(q.id);
      }
    });

    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const isPassed = score >= 60;

    const result: CBTExamResult = {
      id: `cbt-${Date.now()}`,
      examId: exam.id,
      examName: exam.name,
      date: new Date().toISOString().split('T')[0],
      score,
      correctCount,
      totalCount: totalQuestions,
      isPassed,
      timeSpentSeconds: 60 * 60 - timeLeft,
      wrongQuestionIds,
      userAnswers,
    };

    setExamResult(result);
    setIsSubmitted(true);
    onSaveResult(result, questions);

    if (isPassed) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Calculator button handler
  const handleCalcButton = (val: string) => {
    if (val === 'C') {
      setCalcInput('');
    } else if (val === '=') {
      try {
        // Safe evaluation
        const sanitized = calcInput.replace(/[^0-9+\-*/.]/g, '');
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcInput(String(res));
      } catch {
        setCalcInput('Error');
      }
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-[#e0e3e5] flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* CBT Header Bar (Q-Net style modern blue header) */}
        <div className="bg-[#00288e] text-white px-5 sm:px-7 py-3.5 flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
              CBT 시험 시뮬레이터
            </div>
            <h2 className="text-base sm:text-lg font-bold font-hanken truncate">
              {exam.name} 실전 모의고사
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Timer */}
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 bg-white/15 px-3.5 py-1.5 rounded-full font-dday font-extrabold text-sm sm:text-base tracking-wider">
                <Clock size={16} className={timeLeft < 300 ? 'text-red-300 animate-pulse' : 'text-blue-200'} />
                <span>남은시간: {formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Calculator Toggle */}
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors relative"
              title="CBT 공학/일반 계산기 열기"
            >
              <Calculator size={18} />
            </button>

            {/* Close / Exit Button */}
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              title="닫기"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {isSubmitted && !showReviewOnly ? (
          /* RESULT SCREEN */
          <div className="p-6 sm:p-10 flex-1 overflow-y-auto flex flex-col items-center justify-center text-center">
            <div className="max-w-md w-full bg-[#f8fafc] rounded-3xl p-8 border border-[#eceef0] shadow-sm">
              {examResult?.isPassed ? (
                <div className="w-16 h-16 bg-[#d1fae5] text-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy size={36} />
                </div>
              ) : (
                <div className="w-16 h-16 bg-[#ffdad6] text-[#ba1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle size={36} />
                </div>
              )}

              <h3 className="text-2xl font-extrabold font-hanken mb-1 text-[#191c1e]">
                {examResult?.isPassed ? '🎉 축하합니다! 합격권입니다' : '조금만 더 힘내세요! 불합격'}
              </h3>
              <p className="text-xs text-[#757684] mb-6">
                합격 기준: 60점 이상 (과락 없음)
              </p>

              {/* Score Display */}
              <div className="bg-white rounded-2xl p-5 border border-[#e0e3e5] mb-6 shadow-2xs">
                <div className="text-xs font-bold text-[#757684] mb-1">나의 득점</div>
                <div className="text-5xl font-black font-dday text-[#1e40af] mb-2">
                  {examResult?.score}점
                </div>
                <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#444653]">
                  <span>정답: <strong className="text-[#059669]">{examResult?.correctCount}</strong> / {examResult?.totalCount}문제</span>
                  <span>소요시간: <strong>{formatTime(examResult?.timeSpentSeconds || 0)}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => setShowReviewOnly(true)}
                  className="w-full bg-[#1e40af] hover:bg-[#00288e] text-white font-bold py-3 px-4 rounded-full transition-all text-sm shadow-sm"
                >
                  📝 문제 및 해설 오답 확인하기
                </button>
                <button
                  onClick={onClose}
                  className="w-full bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#191c1e] font-semibold py-2.5 px-4 rounded-full transition-colors text-sm"
                >
                  D-Day 대시보드로 돌아가기
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ACTIVE CBT TESTING SCREEN */
          <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Question Box (8 cols) */}
            <div className="lg:col-span-8 p-5 sm:p-7 overflow-y-auto flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#eceef0]">
              {currentQ ? (
                <div>
                  {/* Subject and Question Meta */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#eceef0]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#dde1ff] text-[#001453] text-xs font-bold px-2.5 py-1 rounded-md">
                        {currentQ.subject}
                      </span>
                      <span className="text-xs text-[#757684] font-medium">
                        {currentQ.year || '기출문제'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleToggleMark}
                        className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                          markedQuestions[currentQ.id]
                            ? 'bg-[#ffdad6] text-[#ba1a1a]'
                            : 'bg-[#f2f4f6] text-[#757684] hover:bg-[#eceef0]'
                        }`}
                      >
                        <Bookmark size={14} className={markedQuestions[currentQ.id] ? 'fill-current' : ''} />
                        <span>{markedQuestions[currentQ.id] ? '검토 표시됨' : '검토 체크'}</span>
                      </button>
                      <span className="text-xs font-bold text-[#1e40af] bg-[#dde1ff]/60 px-2.5 py-1 rounded-full">
                        {currentIndex + 1} / {totalQuestions}
                      </span>
                    </div>
                  </div>

                  {/* Question Stem */}
                  <div className="text-base sm:text-lg font-bold text-[#191c1e] mb-6 leading-relaxed">
                    <span className="text-[#1e40af] font-hanken mr-2 font-black">{currentIndex + 1}.</span>
                    {currentQ.question}
                  </div>

                  {/* 4 Choices */}
                  <div className="space-y-3 mb-6">
                    {currentQ.options.map((opt, idx) => {
                      const isSelected = userAnswers[currentQ.id] === idx;
                      const isCorrect = isSubmitted && currentQ.answer === idx;
                      const isWrong = isSubmitted && isSelected && currentQ.answer !== idx;

                      return (
                        <div
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          className={`p-4 rounded-2xl border text-sm font-medium transition-all cursor-pointer flex items-start gap-3.5 ${
                            isSelected
                              ? 'bg-[#dde1ff]/40 border-[#1e40af] text-[#001453] shadow-xs'
                              : 'bg-white border-[#e0e3e5] hover:bg-[#f8fafc] text-[#191c1e]'
                          } ${
                            isCorrect
                              ? 'bg-[#d1fae5] border-[#059669] text-[#065f46] font-bold'
                              : isWrong
                              ? 'bg-[#ffdad6] border-[#ba1a1a] text-[#93000a]'
                              : ''
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#1e40af] text-white'
                                : 'bg-[#f2f4f6] text-[#444653]'
                            }`}
                          >
                            {idx + 1}
                          </div>
                          <span className="mt-0.5 leading-relaxed">{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* If submitted / review mode: show explanation */}
                  {isSubmitted && (
                    <div className="bg-[#f8fafc] p-4 rounded-2xl border border-[#dde1ff] text-xs space-y-1.5 mt-4">
                      <div className="flex items-center gap-1.5 font-bold text-[#1e40af]">
                        <HelpCircle size={15} />
                        <span>정답 해설 (정답: {currentQ.answer + 1}번)</span>
                      </div>
                      <p className="text-[#444653] leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ) : null}

              {/* Bottom Nav Buttons */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#eceef0]">
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#f2f4f6] disabled:opacity-40 hover:bg-[#e6e8ea] text-[#191c1e] font-semibold text-xs rounded-full transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span>이전 문제</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    disabled={currentIndex === totalQuestions - 1}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#f2f4f6] disabled:opacity-40 hover:bg-[#e6e8ea] text-[#191c1e] font-semibold text-xs rounded-full transition-colors"
                  >
                    <span>다음 문제</span>
                    <ChevronRight size={16} />
                  </button>

                  {!isSubmitted && (
                    <button
                      onClick={handleSubmitExam}
                      className="px-5 py-2 bg-[#00288e] hover:bg-[#1e40af] text-white font-bold text-xs rounded-full transition-all shadow-sm"
                    >
                      답안 제출하기
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right: OMR Card Sheet (4 cols) */}
            <div className="lg:col-span-4 bg-[#f8fafc] p-5 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#eceef0]">
                  <h4 className="text-xs font-bold text-[#191c1e] uppercase tracking-wider">
                    CBT OMR 답안지
                  </h4>
                  <span className="text-[11px] text-[#757684]">
                    마킹 완료: <strong>{Object.keys(userAnswers).length}</strong> / {totalQuestions}
                  </span>
                </div>

                {/* OMR Numbers Grid */}
                <div className="grid grid-cols-5 sm:grid-cols-5 gap-2 max-h-72 lg:max-h-96 overflow-y-auto pr-1">
                  {questions.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isMarked = markedQuestions[q.id];
                    const isCurrent = currentIndex === idx;

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`py-2 px-1 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all border relative ${
                          isCurrent
                            ? 'ring-2 ring-[#1e40af] border-transparent bg-white shadow-xs'
                            : isAnswered
                            ? 'bg-[#1e40af] text-white border-transparent'
                            : 'bg-white text-[#444653] border-[#e0e3e5] hover:bg-[#f2f4f6]'
                        }`}
                      >
                        {isMarked && (
                          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#ba1a1a]" />
                        )}
                        <span className={isAnswered && !isCurrent ? 'text-blue-100' : 'text-[#757684]'}>
                          {idx + 1}
                        </span>
                        <span className="text-[11px] mt-0.5">
                          {isAnswered ? `${userAnswers[q.id] + 1}번` : '-'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculator Popup on demand */}
              {showCalculator && (
                <div className="mt-4 bg-white p-3 rounded-2xl border border-[#e0e3e5] shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#191c1e]">CBT 간이 계산기</span>
                    <button onClick={() => setShowCalculator(false)} className="text-[#757684] hover:text-black">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="bg-[#f2f4f6] text-right px-3 py-2 rounded-xl text-sm font-mono font-bold mb-2 min-h-[32px]">
                    {calcInput || '0'}
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
                    {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((btn) => (
                      <button
                        key={btn}
                        onClick={() => handleCalcButton(btn)}
                        className="py-2 bg-[#f8fafc] hover:bg-[#e6e8ea] active:scale-95 rounded-lg border border-[#e0e3e5]"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
