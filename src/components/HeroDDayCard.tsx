import React, { useState } from 'react';
import { ExamInfo, ExamType } from '../types';
import { Calendar, Clock, MapPin, Target, Edit3, Sparkles, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { Logo } from './Logo';

interface HeroDDayCardProps {
  exam: ExamInfo;
  examType: ExamType;
  onToggleExamType: (type: ExamType) => void;
  onOpenEditModal: () => void;
  onOpenCBT: () => void;
  onOpenScheduleModal: () => void;
}

export const HeroDDayCard: React.FC<HeroDDayCardProps> = ({
  exam,
  examType,
  onToggleExamType,
  onOpenEditModal,
  onOpenCBT,
  onOpenScheduleModal,
}) => {
  const targetDateStr = examType === 'written' ? exam.writtenTargetDate : exam.practicalTargetDate;
  
  // Calculate D-Day
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(targetDateStr);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Determine D-Day Text & Urgency
  let dDayDisplay = '';
  let dDaySub = '';
  let isUrgent = false;
  let isPast = false;

  if (diffDays > 0) {
    dDayDisplay = `D-${diffDays}`;
    dDaySub = `시험까지 ${diffDays}일 남았습니다`;
    isUrgent = diffDays <= 7;
  } else if (diffDays === 0) {
    dDayDisplay = 'D-DAY';
    dDaySub = '오늘이 결전의 날입니다! 화이팅!';
    isUrgent = true;
  } else {
    dDayDisplay = `D+${Math.abs(diffDays)}`;
    dDaySub = '시험 일정이 지났습니다. 다음 회차를 설정하세요.';
    isPast = true;
  }

  // Estimate progress based on a 30-day preparation window
  const totalPrepDays = 30;
  const daysPassed = Math.max(0, Math.min(totalPrepDays, totalPrepDays - diffDays));
  const progressPercent = Math.round((daysPassed / totalPrepDays) * 100);

  return (
    <div className="relative overflow-hidden bg-white rounded-3xl border border-[#e0e3e5] shadow-sm transition-all hover:shadow-md">
      {/* Top Banner Gradient Strip */}
      <div className="h-2.5 bg-gradient-to-r from-[#00288e] via-[#1e40af] to-[#64a8fe]" />

      <div className="p-6 sm:p-8">
        {/* Top bar: Category Badge + Type Switcher (필기 / 실기) + Edit button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#dde1ff] text-[#001453] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {exam.category}
            </span>
            <span className="text-xs font-medium text-[#757684]">
              {exam.agency}
            </span>
          </div>

          {/* Exam Type Toggle Switch (필기 vs 실기) */}
          <div className="flex items-center bg-[#f2f4f6] p-1 rounded-full border border-[#e0e3e5]">
            <button
              onClick={() => onToggleExamType('written')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                examType === 'written'
                  ? 'bg-[#1e40af] text-white shadow-xs'
                  : 'text-[#444653] hover:text-[#191c1e]'
              }`}
            >
              1차 필기 (CBT)
            </button>
            <button
              onClick={() => onToggleExamType('practical')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                examType === 'practical'
                  ? 'bg-[#1e40af] text-white shadow-xs'
                  : 'text-[#444653] hover:text-[#191c1e]'
              }`}
            >
              2차 실기 (작업/필답)
            </button>
          </div>
        </div>

        {/* Main Content Grid: Left D-Day Highlight, Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Big D-DAY Display */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e] tracking-tight font-hanken">
                {exam.name}
              </h1>
              <button
                onClick={onOpenEditModal}
                className="p-1.5 text-[#757684] hover:text-[#1e40af] hover:bg-[#f2f4f6] rounded-full transition-colors"
                title="목표 및 일정 수정"
              >
                <Edit3 size={18} />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#444653] mb-4">
              {examType === 'written' ? '객관식 4지선다 60문항 (60분)' : '실무 작업형/필답형 평가'}
            </p>

            {/* D-Day Counter Box with Sapphire & High-Contrast Typography */}
            <div className="w-full bg-[#f8fafc] rounded-2xl p-5 sm:p-6 border border-[#eceef0] relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#757684] uppercase tracking-wider flex items-center gap-1.5">
                  <Target size={14} className="text-[#1e40af]" />
                  {examType === 'written' ? '필기시험 D-Day' : '실기시험 D-Day'}
                </span>
                
                {/* Urgent or Active Badge */}
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isUrgent
                      ? 'bg-[#ffdad6] text-[#93000a] animate-pulse'
                      : isPast
                      ? 'bg-[#eceef0] text-[#757684]'
                      : 'bg-[#dde1ff] text-[#001453]'
                  }`}
                >
                  {isUrgent ? '임박 D-DAY' : isPast ? '종료' : 'D-Day 카운트'}
                </span>
              </div>

              <div className="flex items-baseline gap-3 my-1">
                <span className="text-5xl sm:text-6xl font-black text-[#00288e] tracking-tighter font-dday leading-none">
                  {dDayDisplay}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#444653]">
                  {dDaySub}
                </span>
              </div>

              {/* Progress toward D-Day */}
              <div className="mt-4 pt-3 border-t border-[#eceef0]">
                <div className="flex items-center justify-between text-xs font-semibold mb-1.5 text-[#444653]">
                  <span>학습 대비 진행도 (30일 기준)</span>
                  <span className="text-[#1e40af] font-bold">{progressPercent}%</span>
                </div>
                <div className="w-full bg-[#e6e8ea] h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#1e40af] h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* Exam Meta Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* Date Box */}
              <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-[#eceef0]">
                <div className="flex items-center gap-1.5 text-[#757684] text-xs font-semibold mb-1">
                  <Calendar size={14} className="text-[#0060ac]" />
                  <span>시험 예정일</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#191c1e]">
                  {targetDateStr}
                </div>
              </div>

              {/* Target Score Box */}
              <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-[#eceef0]">
                <div className="flex items-center gap-1.5 text-[#757684] text-xs font-semibold mb-1">
                  <Award size={14} className="text-[#1e40af]" />
                  <span>목표 / 합격선</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#191c1e]">
                  <span className="text-[#1e40af]">{exam.targetScore || 80}점</span> / {exam.passingScore}점
                </div>
              </div>

              {/* Test Time */}
              <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-[#eceef0]">
                <div className="flex items-center gap-1.5 text-[#757684] text-xs font-semibold mb-1">
                  <Clock size={14} className="text-[#273545]" />
                  <span>시험 시간</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#191c1e] truncate">
                  {exam.testTime || '11:40 (60분간 진행)'}
                </div>
              </div>

              {/* Test Location */}
              <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-[#eceef0]">
                <div className="flex items-center gap-1.5 text-[#757684] text-xs font-semibold mb-1">
                  <MapPin size={14} className="text-[#ba1a1a]" />
                  <span>지정 시험장</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#191c1e] truncate">
                  {exam.testLocation || '서울국가자격시험장 4CBT실'}
                </div>
              </div>
            </div>

            {/* Quick Tips / Strategy */}
            <div className="bg-[#dde1ff]/30 rounded-2xl p-3.5 border border-[#c4c5d5]/60 flex items-start gap-2.5">
              <Sparkles size={18} className="text-[#1e40af] shrink-0 mt-0.5" />
              <div className="text-xs text-[#001453]">
                <span className="font-bold">합격 핵심 팁: </span>
                {exam.tips?.[0] || '60문제 중 36문제 이상 득점 시 합격이며, 과락이 없습니다.'}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                id="hero-start-cbt-btn"
                onClick={onOpenCBT}
                className="flex-1 bg-[#1e40af] hover:bg-[#00288e] active:scale-[0.99] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>실전 CBT 모의고사 풀기</span>
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-schedule-sync-btn"
                onClick={onOpenScheduleModal}
                className="bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#191c1e] font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-full transition-colors border border-[#e0e3e5] whitespace-nowrap"
              >
                큐넷 일정 연동
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
