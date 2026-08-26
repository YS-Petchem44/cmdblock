import React, { useState } from 'react';
import { WrongNoteItem, ExamInfo } from '../types';
import { BookOpen, CheckCircle, HelpCircle, Trash2, Check, RefreshCw, Sparkles, Filter } from 'lucide-react';

interface WrongAnswerBookProps {
  wrongNotes: WrongNoteItem[];
  selectedExam: ExamInfo;
  onToggleMastered: (id: string) => void;
  onDeleteNote: (id: string) => void;
  onClearAll: () => void;
}

export const WrongAnswerBook: React.FC<WrongAnswerBookProps> = ({
  wrongNotes,
  selectedExam,
  onToggleMastered,
  onDeleteNote,
  onClearAll,
}) => {
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [showOnlyUnmastered, setShowOnlyUnmastered] = useState<boolean>(false);

  // Filter notes for the current exam or all
  const currentExamNotes = wrongNotes.filter(
    (n) => n.examId === selectedExam.id || !n.examId
  );

  const subjects = Array.from(new Set(currentExamNotes.map((n) => n.question.subject)));

  const filteredNotes = currentExamNotes.filter((n) => {
    if (filterSubject !== 'all' && n.question.subject !== filterSubject) return false;
    if (showOnlyUnmastered && n.isMastered) return false;
    return true;
  });

  const masteredCount = currentExamNotes.filter((n) => n.isMastered).length;

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e0e3e5] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#ffdad6] text-[#ba1a1a] rounded-2xl">
              <BookOpen size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-[#191c1e] font-hanken">
                {selectedExam.name} 오답노트
              </h2>
              <p className="text-xs text-[#757684]">
                CBT 모의고사에서 틀린 문제를 자동으로 수집하고 완벽히 이해할 때까지 반복 복습합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="flex items-center gap-3">
          <div className="bg-[#f8fafc] px-4 py-2 rounded-2xl border border-[#eceef0] text-right">
            <div className="text-[11px] font-bold text-[#757684]">정복 완료</div>
            <div className="text-sm font-extrabold text-[#059669] font-hanken">
              {masteredCount} / {currentExamNotes.length}개
            </div>
          </div>

          {currentExamNotes.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-xs font-semibold text-[#ba1a1a] hover:bg-[#ffdad6] px-3 py-2 rounded-xl transition-colors"
            >
              전체 비우기
            </button>
          )}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#e0e3e5]">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setFilterSubject('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              filterSubject === 'all'
                ? 'bg-[#1e40af] text-white'
                : 'bg-[#f2f4f6] text-[#444653] hover:bg-[#e6e8ea]'
            }`}
          >
            전체 과목 ({currentExamNotes.length})
          </button>
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setFilterSubject(sub)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                filterSubject === sub
                  ? 'bg-[#1e40af] text-white'
                  : 'bg-[#f2f4f6] text-[#444653] hover:bg-[#e6e8ea]'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs font-semibold text-[#444653] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showOnlyUnmastered}
            onChange={(e) => setShowOnlyUnmastered(e.target.checked)}
            className="rounded text-[#1e40af] focus:ring-[#1e40af]"
          />
          <span>미정복 오답만 보기</span>
        </label>
      </div>

      {/* Wrong Questions List */}
      <div className="space-y-4">
        {filteredNotes.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#e0e3e5]">
            <div className="w-12 h-12 bg-[#d1fae5] text-[#059669] rounded-full flex items-center justify-center mx-auto mb-3">
              <Check size={24} />
            </div>
            <h3 className="text-base font-bold text-[#191c1e] mb-1">
              오답노트가 비어 있습니다!
            </h3>
            <p className="text-xs text-[#757684] max-w-sm mx-auto">
              CBT 모의고사를 풀고 틀린 문제가 생기면 이곳에 자동으로 정리되어 언제든 해설과 함께 다시 복습할 수 있습니다.
            </p>
          </div>
        ) : (
          filteredNotes.map((item, index) => {
            const q = item.question;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-6 border transition-all ${
                  item.isMastered
                    ? 'border-[#a7f3d0] bg-[#f0fdf4]/40 opacity-80'
                    : 'border-[#e0e3e5] hover:border-[#1e40af] hover:shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#dde1ff] text-[#001453] text-xs font-bold px-2.5 py-0.5 rounded-md">
                      {q.subject}
                    </span>
                    <span className="text-xs text-[#757684]">
                      기록일: {item.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleMastered(item.id)}
                      className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                        item.isMastered
                          ? 'bg-[#d1fae5] text-[#065f46]'
                          : 'bg-[#f2f4f6] text-[#444653] hover:bg-[#e6e8ea]'
                      }`}
                    >
                      <Check size={14} />
                      <span>{item.isMastered ? '정복 완료' : '완전 정복으로 표시'}</span>
                    </button>

                    <button
                      onClick={() => onDeleteNote(item.id)}
                      className="p-1.5 text-[#757684] hover:text-[#ba1a1a] hover:bg-[#ffdad6] rounded-full transition-colors"
                      title="삭제"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <h4 className="text-base font-bold text-[#191c1e] mb-4 leading-relaxed">
                  <span className="text-[#ba1a1a] font-hanken mr-1.5 font-black">Q.</span>
                  {q.question}
                </h4>

                {/* Options List */}
                <div className="space-y-2 mb-4">
                  {q.options.map((opt, optIdx) => {
                    const isCorrect = q.answer === optIdx;
                    const isUserPick = item.userAnswer === optIdx;

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl text-xs font-medium flex items-center gap-2.5 border ${
                          isCorrect
                            ? 'bg-[#d1fae5] border-[#059669] text-[#065f46] font-bold'
                            : isUserPick
                            ? 'bg-[#ffdad6] border-[#ba1a1a] text-[#93000a] line-through'
                            : 'bg-[#f8fafc] border-[#eceef0] text-[#444653]'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isCorrect
                              ? 'bg-[#059669] text-white'
                              : isUserPick
                              ? 'bg-[#ba1a1a] text-white'
                              : 'bg-[#e0e3e5] text-[#191c1e]'
                          }`}
                        >
                          {optIdx + 1}
                        </span>
                        <span>{opt}</span>
                        {isCorrect && <span className="ml-auto text-[11px] font-bold text-[#059669]">정답</span>}
                        {isUserPick && !isCorrect && (
                          <span className="ml-auto text-[11px] font-bold text-[#ba1a1a]">내가 고른 답</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Explanation */}
                <div className="bg-[#f8fafc] p-4 rounded-2xl border border-[#dde1ff] text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#1e40af] mb-1">
                    <Sparkles size={14} />
                    <span>핵심 개념 & 정답 해설</span>
                  </div>
                  <p className="text-[#444653] leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
