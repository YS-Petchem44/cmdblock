import React, { useState, useEffect } from 'react';
import { ExamInfo } from '../types';
import { X, Calendar, MapPin, Target, Clock, Plus, Edit, Search, Check } from 'lucide-react';

interface CustomDDayModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExam?: ExamInfo | null;
  onSaveExam: (exam: ExamInfo) => void;
  allExams?: ExamInfo[];
}

export const CustomDDayModal: React.FC<CustomDDayModalProps> = ({
  isOpen,
  onClose,
  initialExam,
  onSaveExam,
  allExams = [],
}) => {
  const [name, setName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [writtenTargetDate, setWrittenTargetDate] = useState('2026-09-20');
  const [practicalTargetDate, setPracticalTargetDate] = useState('2026-11-15');
  const [testLocation, setTestLocation] = useState('');
  const [testTime, setTestTime] = useState('');

  useEffect(() => {
    if (initialExam) {
      setName(initialExam.name);
      setWrittenTargetDate(initialExam.writtenTargetDate);
      setPracticalTargetDate(initialExam.practicalTargetDate);
      setTestLocation(initialExam.testLocation || '');
      setTestTime(initialExam.testTime || '');
    } else {
      setName('');
      setWrittenTargetDate('2026-09-20');
      setPracticalTargetDate('2026-11-15');
      setTestLocation('');
      setTestTime('11:40 (입실 11:20)');
    }
  }, [initialExam, isOpen]);

  if (!isOpen) return null;

  // Filter suggestions based on input
  const filteredSuggestions = name.trim() 
    ? allExams.filter(exam => 
        exam.name.toLowerCase().includes(name.toLowerCase())
      )
    : [];

  const handleSelectSuggestion = (exam: ExamInfo) => {
    setName(exam.name);
    setWrittenTargetDate(exam.writtenTargetDate);
    setPracticalTargetDate(exam.practicalTargetDate);
    setTestLocation(exam.testLocation || '');
    setTestTime(exam.testTime || '');
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const updated: ExamInfo = {
      id: initialExam ? initialExam.id : `custom-${Date.now()}`,
      name: name.trim(),
      agency: initialExam?.agency || '한국산업인력공단 (Q-Net)',
      passingScore: 60,
      totalQuestions: 60,
      examDurationMinutes: 60,
      writtenTargetDate,
      practicalTargetDate,
      testLocation: testLocation.trim() || '서울국가자격시험장 4CBT실',
      testTime: testTime.trim() || '11:40 (입실 11:20)',
      subjects: initialExam?.subjects || ['핵심이론', '기출문제'],
      tips: initialExam?.tips || ['60문제 중 36문제 이상 득점 시 합격'],
      isCustom: true,
    };

    onSaveExam(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-[#e0e3e5] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#00288e] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {initialExam ? <Edit size={18} /> : <Plus size={18} />}
            <h3 className="text-base font-bold font-hanken">
              {initialExam ? '자격증 목표 & 시험 정보 수정' : '새로운 목표 자격증 추가'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#191c1e] mb-1">
              자격증 이름 *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="예: 정보처리기능사, 전기기능사, 버섯종균기능사"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full bg-[#f8fafc] text-sm text-[#191c1e] px-4 py-2.5 rounded-xl border border-[#e0e3e5] focus:outline-none focus:border-[#1e40af]"
              />
              
              {/* Suggestions Dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e0e3e5] rounded-xl shadow-lg z-10">
                  {filteredSuggestions.map((exam) => (
                    <button
                      key={exam.id}
                      type="button"
                      onClick={() => handleSelectSuggestion(exam)}
                      className="w-full text-left px-4 py-2.5 hover:bg-[#f2f4f6] border-b border-[#eceef0] last:border-b-0 text-sm text-[#191c1e] transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">{exam.name}</span>
                      <span className="text-[10px] text-[#757684] group-hover:text-[#1e40af] transition-colors">
                        선택
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#191c1e] mb-1">
              1차 필기시험 목표일 *
            </label>
            <input
              type="date"
              required
              value={writtenTargetDate}
              onChange={(e) => setWrittenTargetDate(e.target.value)}
              className="w-full bg-[#f8fafc] text-xs font-semibold text-[#191c1e] px-3 py-2.5 rounded-xl border border-[#e0e3e5] focus:outline-none focus:border-[#1e40af]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#191c1e] mb-1">
              2차 실기시험 목표일 *
            </label>
            <input
              type="date"
              required
              value={practicalTargetDate}
              onChange={(e) => setPracticalTargetDate(e.target.value)}
              className="w-full bg-[#f8fafc] text-xs font-semibold text-[#191c1e] px-3 py-2.5 rounded-xl border border-[#e0e3e5] focus:outline-none focus:border-[#1e40af]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#191c1e] mb-1">
                시험 시간 (회차)
              </label>
              <input
                type="text"
                placeholder="예: 11:40 (입실 11:20)"
                value={testTime}
                onChange={(e) => setTestTime(e.target.value)}
                className="w-full bg-[#f8fafc] text-xs text-[#191c1e] px-3.5 py-2.5 rounded-xl border border-[#e0e3e5] focus:outline-none focus:border-[#1e40af]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#191c1e] mb-1">
                시험 장소 / 고사장
              </label>
              <input
                type="text"
                placeholder="예: 서울국가자격시험장 4CBT실"
                value={testLocation}
                onChange={(e) => setTestLocation(e.target.value)}
                className="w-full bg-[#f8fafc] text-xs text-[#191c1e] px-3.5 py-2.5 rounded-xl border border-[#e0e3e5] focus:outline-none focus:border-[#1e40af]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-[#444653] hover:bg-[#f2f4f6] rounded-full transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1e40af] hover:bg-[#00288e] text-white font-bold text-xs rounded-full transition-all shadow-sm"
            >
              {initialExam ? '변경사항 저장하기' : '자격증 목표 추가'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
