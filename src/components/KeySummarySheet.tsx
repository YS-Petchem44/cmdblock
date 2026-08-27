import React, { useState } from 'react';
import { SummaryNote, ExamInfo } from '../types';
import { INITIAL_SUMMARY_NOTES } from '../data/examsData';
import { BookOpen, Sparkles, Star, ChevronRight, Search } from 'lucide-react';

interface KeySummarySheetProps {
  selectedExam: ExamInfo;
}

export const KeySummarySheet: React.FC<KeySummarySheetProps> = ({ selectedExam }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const notes = INITIAL_SUMMARY_NOTES.filter(
    (n) => n.examId === selectedExam.id || !n.examId
  );

  const filteredNotes = notes.filter((n) => {
    if (!searchKeyword.trim()) return true;
    const kw = searchKeyword.toLowerCase();
    return (
      n.title.toLowerCase().includes(kw) ||
      n.subject.toLowerCase().includes(kw) ||
      n.corePoints.some((p) => p.toLowerCase().includes(kw))
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e0e3e5] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#dde1ff] text-[#1e40af] rounded-2xl">
              <Sparkles size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-[#191c1e] font-hanken">
                {selectedExam.name} 초단기 핵심 요약 족보
              </h2>
              <p className="text-xs text-[#757684]">
                시험 직전까지 이동 중에도 틈틈이 암기할 수 있는 과목별 핵심 빈출 공식 및 요약본입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="키워드/공식 검색 (예: 옴의법칙)"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full bg-[#f8fafc] text-xs text-[#191c1e] pl-9 pr-4 py-2.5 rounded-full border border-[#e0e3e5] focus:outline-none focus:border-[#1e40af]"
          />
          <Search size={14} className="absolute left-3.5 top-3 text-[#757684]" />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredNotes.length === 0 ? (
          <div className="col-span-2 bg-white rounded-3xl p-10 text-center border border-[#e0e3e5] text-xs text-[#757684]">
            일치하는 핵심 요약 내용이 없습니다. 다른 키워드로 검색해보세요.
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-3xl p-6 border border-[#e0e3e5] hover:border-[#1e40af] transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="bg-[#dde1ff] text-[#001453] text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    {note.subject}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#ba1a1a] bg-[#ffdad6] px-2 py-0.5 rounded-full">
                    <Star size={11} className="fill-current" />
                    빈출: {note.frequency}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#191c1e] mb-4">
                  {note.title}
                </h3>

                <ul className="space-y-2 mb-4">
                  {note.corePoints.map((point, i) => (
                    <li key={i} className="text-xs text-[#444653] flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e40af] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#eceef0] flex items-center justify-between text-[11px] text-[#757684]">
                <span>필수 암기 항목</span>
                <span className="text-[#1e40af] font-semibold">Q-Net 최신 출제기준 반영</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
