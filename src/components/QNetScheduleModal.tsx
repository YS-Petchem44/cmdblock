import React from 'react';
import { QNetRoundSchedule } from '../types';
import { QNET_SCHEDULES } from '../data/examsData';
import { X, Calendar, Check, ArrowUpRight, Clock, AlertCircle } from 'lucide-react';

interface QNetScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScheduleAsDDay: (schedule: QNetRoundSchedule, type: 'written' | 'practical') => void;
}

export const QNetScheduleModal: React.FC<QNetScheduleModalProps> = ({
  isOpen,
  onClose,
  onSelectScheduleAsDDay,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#e0e3e5] overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#00288e] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Calendar size={20} className="text-[#a8b8ff]" />
            <div>
              <h2 className="text-base sm:text-lg font-bold font-hanken">
                2025 ~ 2026년 Q-Net 국가기술자격 기능사 시험일정표
              </h2>
              <p className="text-xs text-blue-200">
                한국산업인력공단 정기 및 상시 기능사 공식 회차별 일정
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Schedule List */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-4">
          <div className="bg-[#dde1ff]/30 p-3.5 rounded-2xl border border-[#c4c5d5]/60 text-xs text-[#001453] flex items-start gap-2">
            <AlertCircle size={16} className="text-[#1e40af] shrink-0 mt-0.5" />
            <span>
              원하는 회차의 <strong>[필기 D-Day 설정]</strong> 또는 <strong>[실기 D-Day 설정]</strong> 버튼을 누르면 나의 목표 D-Day 날짜로 즉시 자동 동기화됩니다.
            </span>
          </div>

          <div className="space-y-4">
            {QNET_SCHEDULES.map((sched, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-2xl p-5 border border-[#eceef0] hover:border-[#b8c4ff] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[#eceef0]">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#1e40af] text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                      {sched.type}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#191c1e] font-hanken">
                      {sched.round}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onSelectScheduleAsDDay(sched, 'written');
                        onClose();
                      }}
                      className="bg-[#dde1ff] hover:bg-[#b8c4ff] text-[#001453] text-xs font-bold px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                    >
                      <span>필기 D-Day 적용</span>
                      <Check size={13} />
                    </button>
                    <button
                      onClick={() => {
                        onSelectScheduleAsDDay(sched, 'practical');
                        onClose();
                      }}
                      className="bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#444653] text-xs font-bold px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                    >
                      <span>실기 D-Day 적용</span>
                      <Check size={13} />
                    </button>
                  </div>
                </div>

                {/* Grid Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  {/* Step 1: Written Apply */}
                  <div className="bg-white p-3 rounded-xl border border-[#eceef0]">
                    <div className="text-[#757684] font-semibold mb-0.5">1. 필기 원서접수</div>
                    <div className="font-bold text-[#191c1e]">{sched.writtenApply}</div>
                  </div>

                  {/* Step 2: Written Exam */}
                  <div className="bg-white p-3 rounded-xl border border-[#1e40af]/30 bg-[#dde1ff]/10">
                    <div className="text-[#1e40af] font-bold mb-0.5">2. 필기 시험일 (CBT)</div>
                    <div className="font-extrabold text-[#00288e]">{sched.writtenExam}</div>
                    <div className="text-[10px] text-[#757684] mt-1">발표: {sched.writtenAnnounce}</div>
                  </div>

                  {/* Step 3: Practical Apply */}
                  <div className="bg-white p-3 rounded-xl border border-[#eceef0]">
                    <div className="text-[#757684] font-semibold mb-0.5">3. 실기 원서접수</div>
                    <div className="font-bold text-[#191c1e]">{sched.practicalApply}</div>
                  </div>

                  {/* Step 4: Practical Exam */}
                  <div className="bg-white p-3 rounded-xl border border-[#0060ac]/30 bg-[#d4e3ff]/10">
                    <div className="text-[#0060ac] font-bold mb-0.5">4. 실기 시험일</div>
                    <div className="font-extrabold text-[#003c70]">{sched.practicalExam}</div>
                    <div className="text-[10px] text-[#757684] mt-1">최종합격: {sched.finalAnnounce}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8fafc] px-6 py-3 border-t border-[#eceef0] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#191c1e] hover:bg-black text-white text-xs font-bold rounded-full transition-colors"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
};
