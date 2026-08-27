/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroDDayCard } from './components/HeroDDayCard';
import { StudyChecklist } from './components/StudyChecklist';
import { CBTExamModal } from './components/CBTExamModal';
import { QNetScheduleModal } from './components/QNetScheduleModal';
import { WrongAnswerBook } from './components/WrongAnswerBook';
import { StudyTimer } from './components/StudyTimer';
import { KeySummarySheet } from './components/KeySummarySheet';
import { CustomDDayModal } from './components/CustomDDayModal';
import { Logo } from './components/Logo';
import { 
  INITIAL_EXAMS, 
  QNET_SCHEDULES, 
  INITIAL_SUMMARY_NOTES, 
  MOCK_QUESTIONS_MAP 
} from './data/examsData';
import { 
  ExamInfo, 
  ExamType, 
  StudyTask, 
  CBTExamResult, 
  WrongNoteItem, 
  QNetRoundSchedule, 
  CBTQuestion 
} from './types';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Plus, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Zap,
  HelpCircle,
  BarChart3,
  ExternalLink
} from 'lucide-react';

const INITIAL_TASKS: StudyTask[] = [
  {
    id: 't-1',
    title: '2024년 1회 기출문제 CBT 60문항 풀기',
    category: '기출문제',
    completed: true,
    createdAt: Date.now() - 3600000,
  },
  {
    id: 't-2',
    title: '진법 변환 및 2의 보수 계산 공식 암기',
    category: '핵심이론',
    completed: false,
    createdAt: Date.now() - 1800000,
  },
  {
    id: 't-3',
    title: '지난 CBT 모의고사 오답노트 5개 복습',
    category: '오답정리',
    completed: false,
    createdAt: Date.now(),
  },
];

export default function App() {
  // Exams List & Selected Exam State
  const [exams, setExams] = useState<ExamInfo[]>(() => {
    const saved = localStorage.getItem('certification_master_exams');
    return saved ? JSON.parse(saved) : INITIAL_EXAMS;
  });

  const [selectedExamId, setSelectedExamId] = useState<string>(() => {
    const saved = localStorage.getItem('certification_master_selected_id');
    return saved || 'info-processing';
  });

  const [examType, setExamType] = useState<ExamType>('written');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'cbt' | 'wrongNotes' | 'summary'>('dashboard');

  // Study Tasks State
  const [tasks, setTasks] = useState<StudyTask[]>(() => {
    const saved = localStorage.getItem('certification_master_tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  // CBT Exam History & Wrong Answers State
  const [cbtResults, setCbtResults] = useState<CBTExamResult[]>(() => {
    const saved = localStorage.getItem('certification_master_cbt_results');
    return saved ? JSON.parse(saved) : [];
  });

  const [wrongNotes, setWrongNotes] = useState<WrongNoteItem[]>(() => {
    const saved = localStorage.getItem('certification_master_wrong_notes');
    return saved ? JSON.parse(saved) : [];
  });

  // Today study focus minutes
  const [todayStudyMinutes, setTodayStudyMinutes] = useState<number>(() => {
    const saved = localStorage.getItem('certification_master_study_mins');
    return saved ? JSON.parse(saved) : 50;
  });

  // Modals state
  const [isCBTModalOpen, setIsCBTModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [editingExam, setEditingExam] = useState<ExamInfo | null>(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('certification_master_exams', JSON.stringify(exams));
  }, [exams]);

  useEffect(() => {
    localStorage.setItem('certification_master_selected_id', selectedExamId);
  }, [selectedExamId]);

  useEffect(() => {
    localStorage.setItem('certification_master_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('certification_master_cbt_results', JSON.stringify(cbtResults));
  }, [cbtResults]);

  useEffect(() => {
    localStorage.setItem('certification_master_wrong_notes', JSON.stringify(wrongNotes));
  }, [wrongNotes]);

  useEffect(() => {
    localStorage.setItem('certification_master_study_mins', JSON.stringify(todayStudyMinutes));
  }, [todayStudyMinutes]);

  const selectedExam = exams.find((e) => e.id === selectedExamId) || exams[0];

  // Task Handlers
  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleAddTask = (title: string, category: StudyTask['category']) => {
    const newTask: StudyTask = {
      id: `task-${Date.now()}`,
      title,
      category,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // CBT Exam Result Save Handler
  const handleSaveCBTResult = (result: CBTExamResult, questionSet: CBTQuestion[]) => {
    setCbtResults((prev) => [result, ...prev]);

    // Extract newly wrong questions and add to Wrong Notes
    const newWrongItems: WrongNoteItem[] = [];
    result.wrongQuestionIds.forEach((qId) => {
      const q = questionSet.find((item) => item.id === qId);
      if (q) {
        newWrongItems.push({
          id: `wrong-${Date.now()}-${qId}`,
          examId: result.examId,
          question: q,
          userAnswer: result.userAnswers[qId] ?? -1,
          date: result.date,
          isMastered: false,
        });
      }
    });

    if (newWrongItems.length > 0) {
      setWrongNotes((prev) => [...newWrongItems, ...prev]);
    }
  };

  // Wrong Note Handlers
  const handleToggleMasteredNote = (id: string) => {
    setWrongNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isMastered: !n.isMastered } : n))
    );
  };

  const handleDeleteWrongNote = (id: string) => {
    setWrongNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleClearAllWrongNotes = () => {
    setWrongNotes((prev) => prev.filter((n) => n.examId !== selectedExam.id));
  };

  // Exam Save / Edit Handler
  const handleSaveExam = (updatedExam: ExamInfo) => {
    setExams((prev) => {
      const exists = prev.some((e) => e.id === updatedExam.id);
      if (exists) {
        return prev.map((e) => (e.id === updatedExam.id ? updatedExam : e));
      } else {
        return [updatedExam, ...prev];
      }
    });
    setSelectedExamId(updatedExam.id);
  };

  // Schedule Sync Handler
  const handleSelectScheduleAsDDay = (sched: QNetRoundSchedule, type: 'written' | 'practical') => {
    setExams((prev) =>
      prev.map((e) => {
        if (e.id === selectedExam.id) {
          return {
            ...e,
            writtenTargetDate: type === 'written' ? sched.writtenDateObj : e.writtenTargetDate,
            practicalTargetDate: type === 'practical' ? sched.practicalDateObj : e.practicalTargetDate,
          };
        }
        return e;
      })
    );
    setExamType(type);
  };

  // Filter recent CBT results for the selected exam
  const examCBTResults = cbtResults.filter((r) => r.examId === selectedExam.id);
  const latestCBT = examCBTResults[0];

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col antialiased">
      {/* Top Navigation */}
      <Header
        exams={exams}
        selectedExam={selectedExam}
        onSelectExam={(e) => setSelectedExamId(e.id)}
        onOpenAddModal={() => {
          setEditingExam(null);
          setIsCustomModalOpen(true);
        }}
        onOpenScheduleModal={() => setIsScheduleModalOpen(true)}
        onOpenCBTModal={() => setIsCBTModalOpen(true)}
        onOpenTimerModal={() => setIsTimerModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        
        {/* Quick Exam Switcher Strip (Pill badges) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-xs font-bold text-[#757684] shrink-0 mr-1 flex items-center gap-1">
            <Target size={13} className="text-[#1e40af]" />
            빠른 전환:
          </span>
          {exams.map((exam) => (
            <button
              key={exam.id}
              onClick={() => setSelectedExamId(exam.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border flex items-center gap-1.5 ${
                exam.id === selectedExam.id
                  ? 'bg-[#1e40af] text-white border-transparent shadow-xs'
                  : 'bg-white text-[#444653] border-[#e0e3e5] hover:bg-[#f2f4f6]'
              }`}
            >
              <span>{exam.name}</span>
            </button>
          ))}
          <button
            onClick={() => {
              setEditingExam(null);
              setIsCustomModalOpen(true);
            }}
            className="px-3 py-1.5 rounded-full text-xs font-bold text-[#1e40af] bg-[#dde1ff]/50 hover:bg-[#dde1ff] transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            <Plus size={13} />
            <span>추가</span>
          </button>
        </div>

        {/* Dynamic Views based on Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Primary Hero D-Day Card */}
            <HeroDDayCard
              exam={selectedExam}
              examType={examType}
              onToggleExamType={setExamType}
              onOpenEditModal={() => {
                setEditingExam(selectedExam);
                setIsCustomModalOpen(true);
              }}
              onOpenCBT={() => setIsCBTModalOpen(true)}
              onOpenScheduleModal={() => setIsScheduleModalOpen(true)}
            />

            {/* Middle 2-Column Grid: Left Checklist, Right CBT & Study Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column (7 cols): Daily Study Checklist */}
              <div className="lg:col-span-7">
                <StudyChecklist
                  tasks={tasks}
                  onToggleTask={handleToggleTask}
                  onAddTask={handleAddTask}
                  onDeleteTask={handleDeleteTask}
                />
              </div>

              {/* Right Column (5 cols): CBT Readiness & Stats */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* CBT Mock Test Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#e0e3e5] shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-[#dde1ff] text-[#001453] rounded-2xl">
                        <Award size={20} />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-[#191c1e] font-hanken">
                          {selectedExam.name} CBT 모의고사
                        </h3>
                        <p className="text-[11px] text-[#757684]">
                          실제 Q-Net CBT 시험 화면과 100% 동일한 환경
                        </p>
                      </div>
                    </div>
                  </div>

                  {latestCBT ? (
                    <div className="bg-[#f8fafc] rounded-2xl p-4 border border-[#eceef0] mb-4">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#757684] mb-1">
                        <span>최근 응시 결과 ({latestCBT.date})</span>
                        <span className={latestCBT.isPassed ? 'text-[#059669] font-bold' : 'text-[#ba1a1a] font-bold'}>
                          {latestCBT.isPassed ? '합격권 (PASS)' : '불합격 (FAIL)'}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-black font-dday text-[#1e40af]">
                          {latestCBT.score}점
                        </span>
                        <span className="text-xs text-[#444653]">
                          정답: {latestCBT.correctCount} / {latestCBT.totalCount}문항
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#f8fafc] rounded-2xl p-4 border border-[#eceef0] mb-4 text-xs text-[#757684] text-center">
                      아직 응시한 모의고사가 없습니다. 첫 CBT 모의고사를 풀어보세요!
                    </div>
                  )}

                  <button
                    onClick={() => setIsCBTModalOpen(true)}
                    className="w-full bg-[#1e40af] hover:bg-[#00288e] active:scale-[0.99] text-white font-bold py-3 px-4 rounded-full transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Zap size={16} />
                    <span>실전 60문항 CBT 모의고사 시작</span>
                  </button>
                </div>

                {/* Study Overview & Shortcuts */}
                <div className="bg-white rounded-3xl p-6 border border-[#e0e3e5] shadow-sm">
                  <h3 className="text-sm font-bold text-[#191c1e] mb-3 flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#1e40af]" />
                    <span>나의 학습 요약 & 바로가기</span>
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div 
                      onClick={() => setActiveTab('wrongNotes')}
                      className="bg-[#f8fafc] hover:bg-[#dde1ff]/30 p-3.5 rounded-2xl border border-[#eceef0] cursor-pointer transition-colors"
                    >
                      <div className="text-[11px] font-bold text-[#757684] mb-0.5">오답노트 수집</div>
                      <div className="text-lg font-black font-hanken text-[#ba1a1a]">
                        {wrongNotes.filter((n) => n.examId === selectedExam.id).length}개
                      </div>
                      <span className="text-[10px] text-[#0060ac] font-semibold">복습하러 가기 →</span>
                    </div>

                    <div 
                      onClick={() => setIsTimerModalOpen(true)}
                      className="bg-[#f8fafc] hover:bg-[#dde1ff]/30 p-3.5 rounded-2xl border border-[#eceef0] cursor-pointer transition-colors"
                    >
                      <div className="text-[11px] font-bold text-[#757684] mb-0.5">오늘 집중 학습</div>
                      <div className="text-lg font-black font-hanken text-[#1e40af]">
                        {todayStudyMinutes}분
                      </div>
                      <span className="text-[10px] text-[#0060ac] font-semibold">타이머 열기 →</span>
                    </div>
                  </div>

                  {/* Summary Notes Link */}
                  <div
                    onClick={() => setActiveTab('summary')}
                    className="p-3 bg-[#dde1ff]/40 hover:bg-[#dde1ff]/70 rounded-2xl border border-[#c4c5d5]/50 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-[#1e40af]" />
                      <span className="text-xs font-bold text-[#001453]">
                        {selectedExam.name} 핵심 족보 확인
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#1e40af]">열기 →</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom 2025/2026 Q-Net Schedule Preview */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e0e3e5] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-[#0060ac]" />
                  <div>
                    <h3 className="text-base font-bold text-[#191c1e] font-hanken">
                      2026년 정기 기능사 회차별 시험일정
                    </h3>
                    <p className="text-xs text-[#757684]">
                      원서접수 기간을 놓치지 않도록 미리 체크하세요.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsScheduleModalOpen(true)}
                  className="text-xs font-bold text-[#1e40af] hover:underline flex items-center gap-1"
                >
                  <span>전체 일정 및 D-Day 동기화</span>
                  <ExternalLink size={13} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {QNET_SCHEDULES.slice(0, 4).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f8fafc] p-4 rounded-2xl border border-[#eceef0] hover:border-[#b8c4ff] transition-all"
                  >
                    <div className="text-xs font-bold text-[#00288e] mb-1">{item.round}</div>
                    <div className="text-[11px] text-[#757684] space-y-1">
                      <div>필기: <strong className="text-[#191c1e]">{item.writtenExam}</strong></div>
                      <div>실기: <strong className="text-[#191c1e]">{item.practicalExam}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: CBT Full Test */}
        {activeTab === 'cbt' && (
          <div className="bg-white rounded-3xl p-8 border border-[#e0e3e5] shadow-sm text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 bg-[#dde1ff] text-[#00288e] rounded-full flex items-center justify-center mx-auto">
                <Award size={32} />
              </div>
              <h2 className="text-2xl font-extrabold text-[#191c1e] font-hanken">
                {selectedExam.name} CBT 실전 모의고사
              </h2>
              <p className="text-xs sm:text-sm text-[#757684]">
                한국산업인력공단(Q-Net) 실제 CBT 시험과 동일한 4지선다형 60문항(60분) 모의고사입니다. 시험 종료 즉시 점수 및 합격 여부가 판정됩니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsCBTModalOpen(true)}
                  className="w-full bg-[#1e40af] hover:bg-[#00288e] text-white font-bold py-4 px-6 rounded-full transition-all text-base shadow-md flex items-center justify-center gap-2"
                >
                  <Zap size={20} />
                  <span>실전 CBT 모의고사 응시하기</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Wrong Answer Book */}
        {activeTab === 'wrongNotes' && (
          <WrongAnswerBook
            wrongNotes={wrongNotes}
            selectedExam={selectedExam}
            onToggleMastered={handleToggleMasteredNote}
            onDeleteNote={handleDeleteWrongNote}
            onClearAll={handleClearAllWrongNotes}
          />
        )}

        {/* Tab: Summary Notes */}
        {activeTab === 'summary' && (
          <KeySummarySheet selectedExam={selectedExam} />
        )}

      </main>

      {/* Modals */}
      <CBTExamModal
        exam={selectedExam}
        isOpen={isCBTModalOpen}
        onClose={() => setIsCBTModalOpen(false)}
        onSaveResult={handleSaveCBTResult}
      />

      <QNetScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onSelectScheduleAsDDay={handleSelectScheduleAsDDay}
      />

      <StudyTimer
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
        todayStudyMinutes={todayStudyMinutes}
        onAddStudyMinutes={(mins) => setTodayStudyMinutes((prev) => prev + mins)}
      />

      <CustomDDayModal
        isOpen={isCustomModalOpen}
        onClose={() => {
          setIsCustomModalOpen(false);
          setEditingExam(null);
        }}
        initialExam={editingExam}
        onSaveExam={handleSaveExam}
      />

      {/* Footer */}
      <footer className="mt-12 border-t border-[#eceef0] bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#757684]">
          <div className="flex items-center gap-2">
            <Logo size="sm" showText={false} />
            <span className="font-semibold text-[#191c1e]">D-DAY 기능사 (Certification Master)</span>
            <span>· 국가기술자격 합격 플래너</span>
          </div>
          <div>
            한국산업인력공단 Q-Net 기준 2025~2026 시험일정 및 CBT 출제기준 지원
          </div>
        </div>
      </footer>
    </div>
  );
}
