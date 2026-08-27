export type ExamCategory = 
  | 'IT·정보통신'
  | '전기·전자'
  | '조리·제과제빵'
  | '기계·운전'
  | '미용·패션'
  | '디자인·콘텐츠'
  | '안전·환경'
  | '기타';

export type ExamType = 'written' | 'practical'; // 필기 vs 실기

export interface ExamInfo {
  id: string;
  name: string;
  agency: string; // 한국산업인력공단(Q-Net)
  passingScore: number; // 보통 60점
  totalQuestions: number; // 60문항
  examDurationMinutes: number; // 60분
  writtenTargetDate: string; // YYYY-MM-DD
  practicalTargetDate: string; // YYYY-MM-DD
  testLocation?: string;
  testTime?: string;
  subjects: string[];
  tips?: string[];
  isCustom?: boolean;
}

export interface QNetRoundSchedule {
  round: string; // "2025년 정기 기능사 1회"
  type: '정기' | '상시';
  writtenApply: string; // "2025.01.06 ~ 01.09"
  writtenExam: string; // "2025.01.21 ~ 01.26"
  writtenAnnounce: string; // "2025.02.05"
  practicalApply: string; // "2025.02.10 ~ 02.13"
  practicalExam: string; // "2025.03.15 ~ 04.02"
  finalAnnounce: string; // "2025.04.11"
  writtenDateObj: string; // "2025-01-21" for D-day calculation
  practicalDateObj: string; // "2025-03-15"
}

export interface StudyTask {
  id: string;
  title: string;
  category: '기출문제' | '핵심이론' | '오답정리' | '실기준비' | '기타';
  completed: boolean;
  dueDate?: string;
  createdAt: number;
}

export interface CBTQuestion {
  id: number;
  subject: string;
  question: string;
  options: string[];
  answer: number; // 0, 1, 2, 3 (1~4번)
  explanation: string;
  year?: string;
  diagramSvg?: string;
}

export interface CBTExamResult {
  id: string;
  examId: string;
  examName: string;
  date: string;
  score: number;
  correctCount: number;
  totalCount: number;
  isPassed: boolean;
  timeSpentSeconds: number;
  wrongQuestionIds: number[];
  userAnswers: Record<number, number>;
}

export interface WrongNoteItem {
  id: string;
  examId: string;
  question: CBTQuestion;
  userAnswer: number;
  date: string;
  isMastered: boolean;
}

export interface SummaryNote {
  id: string;
  examId: string;
  subject: string;
  title: string;
  corePoints: string[];
  frequency: '매우높음' | '높음' | '보통';
}
