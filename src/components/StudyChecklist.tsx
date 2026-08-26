import React, { useState } from 'react';
import { StudyTask } from '../types';
import { CheckSquare, Square, Plus, Trash2, CheckCircle, Flame, Calendar, Tag } from 'lucide-react';

interface StudyChecklistProps {
  tasks: StudyTask[];
  onToggleTask: (id: string) => void;
  onAddTask: (title: string, category: StudyTask['category']) => void;
  onDeleteTask: (id: string) => void;
}

export const StudyChecklist: React.FC<StudyChecklistProps> = ({
  tasks,
  onToggleTask,
  onAddTask,
  onDeleteTask,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<StudyTask['category']>('기출문제');

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    onAddTask(newTaskTitle.trim(), selectedCategory);
    setNewTaskTitle('');
  };

  const getCategoryBadgeClass = (category: StudyTask['category']) => {
    switch (category) {
      case '기출문제':
        return 'bg-[#dde1ff] text-[#001453]';
      case '핵심이론':
        return 'bg-[#d4e3ff] text-[#003c70]';
      case '오답정리':
        return 'bg-[#ffdad6] text-[#93000a]';
      case '실기준비':
        return 'bg-[#d5e4f8] text-[#0e1d2b]';
      default:
        return 'bg-[#eceef0] text-[#444653]';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e0e3e5] shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-[#191c1e] font-hanken">
              오늘의 합격 체크리스트
            </h2>
            {completionRate === 100 && totalCount > 0 && (
              <span className="flex items-center gap-1 bg-[#d1fae5] text-[#065f46] text-xs font-bold px-2 py-0.5 rounded-full">
                <CheckCircle size={12} />
                오늘 목표 달성!
              </span>
            )}
          </div>
          <p className="text-xs text-[#757684] mt-0.5">
            매일 꾸준한 기출문제 풀이와 오답 정리가 단기 합격의 지름길입니다.
          </p>
        </div>

        {/* Completion Progress Gauge */}
        <div className="flex items-center gap-3 bg-[#f8fafc] px-4 py-2 rounded-2xl border border-[#eceef0]">
          <div className="text-right">
            <div className="text-xs font-bold text-[#757684]">달성률</div>
            <div className="text-sm font-extrabold text-[#1e40af] font-hanken">
              {completedCount} / {totalCount} ({completionRate}%)
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border-4 border-[#e6e8ea] flex items-center justify-center relative">
            <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#e6e8ea]"
                strokeWidth="4"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#1e40af] transition-all duration-500"
                strokeDasharray={`${completionRate}, 100`}
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-[10px] font-black text-[#1e40af]">{completionRate}%</span>
          </div>
        </div>
      </div>

      {/* Task Input Form */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="flex flex-col sm:flex-row gap-2 bg-[#f8fafc] p-2 rounded-2xl border border-[#eceef0]">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as StudyTask['category'])}
            aria-label="학습 구분 카테고리"
            className="bg-white text-xs font-bold text-[#191c1e] px-3 py-2.5 rounded-xl border border-[#e0e3e5] focus:outline-none focus:border-[#1e40af]"
          >
            <option value="기출문제">📝 기출문제</option>
            <option value="핵심이론">📚 핵심이론</option>
            <option value="오답정리">💡 오답정리</option>
            <option value="실기준비">🛠️ 실기준비</option>
            <option value="기타">📌 기타</option>
          </select>

          {/* Text Input */}
          <input
            type="text"
            placeholder="오늘 공부할 내용을 입력하세요 (예: 2024년 1회 기출 60문항 풀기)"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="flex-1 bg-white text-sm text-[#191c1e] px-4 py-2.5 rounded-xl border border-[#e0e3e5] placeholder-[#757684] focus:outline-none focus:border-[#1e40af]"
          />

          {/* Add Button */}
          <button
            type="submit"
            disabled={!newTaskTitle.trim()}
            className="bg-[#1e40af] disabled:opacity-50 hover:bg-[#00288e] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shrink-0"
          >
            <Plus size={16} />
            <span>추가</span>
          </button>
        </div>
      </form>

      {/* Task List */}
      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-[#757684] text-sm">
            등록된 학습 할 일이 없습니다. 위 입력창에서 오늘 할 일을 추가해보세요!
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => onToggleTask(task.id)}
              className={`group flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                task.completed
                  ? 'bg-[#f2f4f6]/60 border-[#eceef0] opacity-75'
                  : 'bg-white border-[#eceef0] hover:border-[#b8c4ff] hover:shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <button
                  type="button"
                  aria-label={task.completed ? "완료 해제" : "완료 표시"}
                  className="text-[#1e40af] shrink-0"
                >
                  {task.completed ? (
                    <CheckSquare size={20} className="text-[#1e40af] fill-[#dde1ff]" />
                  ) : (
                    <Square size={20} className="text-[#757684]" />
                  )}
                </button>
                <div className="min-w-0">
                  <div
                    className={`text-sm font-semibold truncate ${
                      task.completed ? 'line-through text-[#757684]' : 'text-[#191c1e]'
                    }`}
                  >
                    {task.title}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${getCategoryBadgeClass(task.category)}`}>
                  {task.category}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTask(task.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-[#ba1a1a] hover:bg-[#ffdad6] rounded-md transition-all"
                  title="삭제"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
