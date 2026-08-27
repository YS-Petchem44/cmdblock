import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Clock, Flame, CheckCircle } from 'lucide-react';

interface StudyTimerProps {
  isOpen: boolean;
  onClose: () => void;
  todayStudyMinutes: number;
  onAddStudyMinutes: (mins: number) => void;
}

export const StudyTimer: React.FC<StudyTimerProps> = ({
  isOpen,
  onClose,
  todayStudyMinutes,
  onAddStudyMinutes,
}) => {
  const [mode, setMode] = useState<'stopwatch' | 'pomodoro'>('pomodoro');
  const [seconds, setSeconds] = useState<number>(25 * 60); // 25 min default
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pomodoroLength, setPomodoroLength] = useState<number>(25);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (mode === 'pomodoro') {
            if (prev <= 1) {
              setIsRunning(false);
              onAddStudyMinutes(pomodoroLength);
              return 0;
            }
            return prev - 1;
          } else {
            // stopwatch
            return prev + 1;
          }
        });
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, mode, pomodoroLength, onAddStudyMinutes]);

  if (!isOpen) return null;

  const handleReset = () => {
    setIsRunning(false);
    if (mode === 'pomodoro') {
      setSeconds(pomodoroLength * 60);
    } else {
      if (seconds > 60) {
        onAddStudyMinutes(Math.floor(seconds / 60));
      }
      setSeconds(0);
    }
  };

  const handleSetPomodoro = (mins: number) => {
    setIsRunning(false);
    setPomodoroLength(mins);
    setSeconds(mins * 60);
  };

  const formatDisplay = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-[#e0e3e5] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#00288e] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-[#a8b8ff]" />
            <h3 className="text-base font-bold font-hanken">집중 학습 타이머</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          {/* Mode Switcher */}
          <div className="flex items-center bg-[#f2f4f6] p-1 rounded-full border border-[#e0e3e5] mb-6">
            <button
              onClick={() => {
                setMode('pomodoro');
                setIsRunning(false);
                setSeconds(pomodoroLength * 60);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                mode === 'pomodoro'
                  ? 'bg-[#1e40af] text-white shadow-xs'
                  : 'text-[#444653]'
              }`}
            >
              뽀모도로 (25분 집중)
            </button>
            <button
              onClick={() => {
                setMode('stopwatch');
                setIsRunning(false);
                setSeconds(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                mode === 'stopwatch'
                  ? 'bg-[#1e40af] text-white shadow-xs'
                  : 'text-[#444653]'
              }`}
            >
              스톱워치 (자유 측정)
            </button>
          </div>

          {/* Preset buttons for Pomodoro */}
          {mode === 'pomodoro' && (
            <div className="flex gap-2 mb-4">
              {[15, 25, 45, 60].map((m) => (
                <button
                  key={m}
                  onClick={() => handleSetPomodoro(m)}
                  className={`px-3 py-1 text-xs font-bold rounded-xl border transition-all ${
                    pomodoroLength === m
                      ? 'bg-[#dde1ff] border-[#1e40af] text-[#001453]'
                      : 'bg-white border-[#e0e3e5] text-[#757684] hover:bg-[#f8fafc]'
                  }`}
                >
                  {m}분
                </button>
              ))}
            </div>
          )}

          {/* Big Time Display */}
          <div className="w-56 h-56 rounded-full bg-[#f8fafc] border-4 border-[#dde1ff] flex flex-col items-center justify-center my-2 shadow-inner">
            <span className="text-5xl font-black font-dday text-[#00288e] tracking-tight">
              {formatDisplay(seconds)}
            </span>
            <span className="text-xs font-semibold text-[#757684] mt-1">
              {isRunning ? '🔥 집중 공부 중...' : '준비 완료'}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handleReset}
              className="p-3 bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#444653] rounded-full transition-colors"
              title="리셋"
            >
              <RotateCcw size={20} />
            </button>

            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all shadow-md flex items-center gap-2 ${
                isRunning
                  ? 'bg-[#ba1a1a] hover:bg-[#93000a]'
                  : 'bg-[#1e40af] hover:bg-[#00288e]'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause size={18} />
                  <span>일시정지</span>
                </>
              ) : (
                <>
                  <Play size={18} />
                  <span>학습 시작</span>
                </>
              )}
            </button>
          </div>

          {/* Today Accumulated Time */}
          <div className="mt-8 pt-4 border-t border-[#eceef0] w-full flex items-center justify-between text-xs text-[#444653]">
            <span className="flex items-center gap-1 font-semibold">
              <Flame size={15} className="text-[#1e40af]" />
              오늘 총 누적 집중 시간:
            </span>
            <strong className="text-sm font-extrabold text-[#1e40af]">
              {Math.floor(todayStudyMinutes / 60)}시간 {todayStudyMinutes % 60}분
            </strong>
          </div>

        </div>

      </div>
    </div>
  );
};
