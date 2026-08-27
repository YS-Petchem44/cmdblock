import React from 'react';
import { Logo } from './Logo';
import { ExamInfo } from '../types';
import { Calendar, Plus, BookOpen, Clock, Award, ChevronDown } from 'lucide-react';

interface HeaderProps {
  exams: ExamInfo[];
  selectedExam: ExamInfo;
  onSelectExam: (exam: ExamInfo) => void;
  onOpenAddModal: () => void;
  onOpenScheduleModal: () => void;
  onOpenCBTModal: () => void;
  onOpenTimerModal: () => void;
  activeTab: 'dashboard' | 'cbt' | 'wrongNotes' | 'summary';
  setActiveTab: (tab: 'dashboard' | 'cbt' | 'wrongNotes' | 'summary') => void;
}

export const Header: React.FC<HeaderProps> = ({
  exams,
  selectedExam,
  onSelectExam,
  onOpenAddModal,
  onOpenScheduleModal,
  onOpenCBTModal,
  onOpenTimerModal,
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#eceef0] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div 
          onClick={() => setActiveTab('dashboard')}
          className="cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <Logo size="md" />
        </div>

        {/* Center: Exam Selector Dropdown */}
        <div className="flex items-center gap-2">
          <div className="relative group">
            <button
              id="exam-selector-btn"
              className="flex items-center gap-2 bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#191c1e] font-semibold text-sm px-3.5 py-2 rounded-full transition-all border border-[#e0e3e5] shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#1e40af]"></span>
              <span className="max-w-[130px] sm:max-w-[200px] truncate">{selectedExam.name}</span>
              <ChevronDown size={16} className="text-[#444653]" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-1.5 w-64 bg-white rounded-2xl shadow-xl border border-[#e0e3e5] py-2 hidden group-hover:block group-focus-within:block z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[11px] font-bold text-[#757684] uppercase tracking-wider">
                나의 목표 자격증 선택
              </div>
              <div className="max-h-60 overflow-y-auto">
                {exams.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => onSelectExam(exam)}
                    className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between hover:bg-[#f2f4f6] transition-colors ${
                      selectedExam.id === exam.id
                        ? 'text-[#1e40af] font-bold bg-[#dde1ff]/40'
                        : 'text-[#191c1e]'
                    }`}
                  >
                    <span>{exam.name}</span>
                    <span className="text-[11px] text-[#757684] bg-white px-2 py-0.5 rounded-md border border-[#e0e3e5]">
                      {exam.category}
                    </span>
                  </button>
                ))}
              </div>
              <div className="border-t border-[#eceef0] mt-1 pt-1 px-2">
                <button
                  onClick={onOpenAddModal}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#1e40af] hover:bg-[#dde1ff]/50 rounded-xl transition-colors"
                >
                  <Plus size={14} />
                  새 자격증 추가하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Schedule Calendar Button */}
          <button
            id="qnet-schedule-btn"
            onClick={onOpenScheduleModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-[#0060ac] hover:bg-[#d4e3ff]/60 rounded-full transition-colors"
            title="2025~2026 Q-Net 시험일정 확인"
          >
            <Calendar size={16} />
            <span className="hidden sm:inline">시험일정</span>
          </button>

          {/* Study Timer Button */}
          <button
            id="study-timer-btn"
            onClick={onOpenTimerModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-[#273545] hover:bg-[#eceef0] rounded-full transition-colors"
            title="학습 타이머 / 뽀모도로"
          >
            <Clock size={16} />
            <span className="hidden md:inline">학습타이머</span>
          </button>

          {/* Quick CBT Button */}
          <button
            id="quick-cbt-btn"
            onClick={onOpenCBTModal}
            className="flex items-center gap-1.5 bg-[#1e40af] hover:bg-[#00288e] active:scale-95 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all shadow-sm"
          >
            <Award size={16} />
            <span>CBT 모의고사</span>
          </button>
        </div>
      </div>

      {/* Mobile / Desktop Navigation Tab Bar */}
      <div className="border-t border-[#eceef0] bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto py-1.5 no-scrollbar">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'bg-[#1e40af] text-white shadow-xs'
                : 'text-[#444653] hover:text-[#191c1e] hover:bg-[#eceef0]'
            }`}
          >
            🎯 D-Day 홈 & 플래너
          </button>
          <button
            onClick={() => setActiveTab('cbt')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === 'cbt'
                ? 'bg-[#1e40af] text-white shadow-xs'
                : 'text-[#444653] hover:text-[#191c1e] hover:bg-[#eceef0]'
            }`}
          >
            📝 CBT 실전 모의고사
          </button>
          <button
            onClick={() => setActiveTab('wrongNotes')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === 'wrongNotes'
                ? 'bg-[#1e40af] text-white shadow-xs'
                : 'text-[#444653] hover:text-[#191c1e] hover:bg-[#eceef0]'
            }`}
          >
            💡 오답노트 & 복습
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === 'summary'
                ? 'bg-[#1e40af] text-white shadow-xs'
                : 'text-[#444653] hover:text-[#191c1e] hover:bg-[#eceef0]'
            }`}
          >
            📖 핵심 암기 족보
          </button>
        </div>
      </div>
    </header>
  );
};
