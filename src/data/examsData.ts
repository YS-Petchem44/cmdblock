import { ExamInfo, QNetRoundSchedule, CBTQuestion, SummaryNote } from '../types';

export const INITIAL_EXAMS: ExamInfo[] = [
  {
    id: 'info-processing',
    name: '정보처리기능사',
    category: 'IT·정보통신',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-20',
    practicalTargetDate: '2026-11-15',
    testLocation: '서울국가자격시험장 4CBT실',
    testTime: '11:40 (입실 11:20)',
    targetScore: 85,
    subjects: ['전자계산기일반', '패키지활용', 'PC운영체제', '정보통신일반'],
    tips: [
      '60문제 중 36문제 이상 맞추면 필기 합격 (과락 없음)',
      '진법 변환, 논리 게이트, SQL 기본 문법은 매회 출제되므로 필수 암기',
      'CBT 시험 종료 즉시 화면에 득점 및 합격 여부 표시'
    ]
  },
  {
    id: 'electrician',
    name: '전기기능사',
    category: '전기·전자',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-22',
    practicalTargetDate: '2026-11-28',
    testLocation: '인천디지털시험센터 2층',
    testTime: '09:00 (입실 08:40)',
    targetScore: 75,
    subjects: ['전기이론', '전기기기', '전기설비'],
    tips: [
      '전기이론: 옴의 법칙, 쿨롱의 법칙, RLC 회로 공식 숙지',
      '전기설비: 전선 굵기, 접지공사 규격, 배선공사 암기 필수',
      '공학용 계산기 지참 가능 (허용군 모델 확인)'
    ]
  },
  {
    id: 'korean-cook',
    name: '한식조리기능사',
    category: '조리·제과제빵',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-14',
    practicalTargetDate: '2026-10-30',
    testLocation: '서울서부국가자격시험장',
    testTime: '13:00 (입실 12:40)',
    targetScore: 80,
    subjects: ['위생관리 및 안전관리', '재료선별 및 구매', '음식조리'],
    tips: [
      '상시 기능사로 매주 목요일 원서접수 가능',
      '병원성 대장균, 포도상구균, 보툴리누스균 등 식중독균 잠복기 및 특성 암기',
      'HACCP 7원칙 12절차 필수 출제'
    ]
  },
  {
    id: 'bakery',
    name: '제과기능사',
    category: '조리·제과제빵',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-18',
    practicalTargetDate: '2026-11-05',
    testLocation: '경기북부국가자격시험장',
    testTime: '15:20 (입실 15:00)',
    targetScore: 78,
    subjects: ['과자류 제조', '재료혼합 및 반죽발효', '위생안전관리'],
    tips: [
      '반죽법(크림법, 블렌딩법, 시폰법 등)의 특징과 제품 연결',
      '이스트, 베이킹파우더, 쇼트닝 등 제과 재료의 화학적 기능 암기'
    ]
  },
  {
    id: 'forklift',
    name: '지게차운전기능사',
    category: '기계·운전',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-10',
    practicalTargetDate: '2026-10-18',
    testLocation: '한국산업인력공단 서울남부지사',
    testTime: '10:20 (입실 10:00)',
    targetScore: 85,
    subjects: ['지게차 주행 및 하역', '점검 및 정비', '도로교통 및 안전관리'],
    tips: [
      '기관(엔진), 전기, 섀시, 유압장치 기본 구조 암기',
      '도로교통법규 및 산업안전보건법 관련 문제 반복 숙달'
    ]
  },
  {
    id: 'comp-graphics',
    name: '컴퓨터그래픽스운용기능사',
    category: '디자인·콘텐츠',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-25',
    practicalTargetDate: '2026-11-20',
    testLocation: '서울동부자격시험장',
    testTime: '14:00 (입실 13:40)',
    targetScore: 82,
    subjects: ['산업디자인일반', '색채 및 도법', '디자인재료', '컴퓨터그래픽스'],
    tips: [
      '색채학(먼셀, 오스트발트 색체계), 보색 및 대비 효과 암기',
      '포토샵, 일러스트레이터 단축키 및 비트맵/벡터 차이 숙지'
    ]
  },
  {
    id: 'hazardous-goods',
    name: '위험물기능사',
    category: '안전·환경',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-28',
    practicalTargetDate: '2026-12-02',
    testLocation: '수원국가자격시험센터',
    testTime: '11:40 (입실 11:20)',
    targetScore: 80,
    subjects: ['화재예방과 소화방법', '위험물의 성질과 취급'],
    tips: [
      '제1류~제6류 위험물별 품명, 지정수량, 소화약제 매칭 암기',
      '화학 반응식 및 소화기 적응성 표 필수 숙달'
    ]
  },
  {
    id: 'web-design',
    name: '웹디자인기능사',
    category: 'IT·정보통신',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-10-05',
    practicalTargetDate: '2026-12-10',
    testLocation: '서울자격시험센터',
    testTime: '10:00 (입실 09:40)',
    targetScore: 90,
    subjects: ['디자인일반', '인터넷일반', '웹그래픽디자인'],
    tips: [
      'HTML5, CSS3 시맨틱 태그 및 JavaScript 기본 문법',
      '웹 접근성 지침 및 반응형 웹 디자인 기초'
    ]
  }
];

export const QNET_SCHEDULES: QNetRoundSchedule[] = [
  {
    round: '2026년 정기 기능사 1회',
    type: '정기',
    writtenApply: '2026.01.05 ~ 01.08',
    writtenExam: '2026.01.20 ~ 01.25',
    writtenAnnounce: '2026.02.04',
    practicalApply: '2026.02.09 ~ 02.12',
    practicalExam: '2026.03.14 ~ 04.01',
    finalAnnounce: '2026.04.10',
    writtenDateObj: '2026-01-20',
    practicalDateObj: '2026-03-14'
  },
  {
    round: '2026년 정기 기능사 2회',
    type: '정기',
    writtenApply: '2026.03.09 ~ 03.12',
    writtenExam: '2026.03.24 ~ 03.29',
    writtenAnnounce: '2026.04.08',
    practicalApply: '2026.04.13 ~ 04.16',
    practicalExam: '2026.05.23 ~ 06.10',
    finalAnnounce: '2026.06.19',
    writtenDateObj: '2026-03-24',
    practicalDateObj: '2026-05-23'
  },
  {
    round: '2026년 정기 기능사 3회',
    type: '정기',
    writtenApply: '2026.05.25 ~ 05.28',
    writtenExam: '2026.06.09 ~ 06.14',
    writtenAnnounce: '2026.06.24',
    practicalApply: '2026.06.29 ~ 07.02',
    practicalExam: '2026.08.08 ~ 08.26',
    finalAnnounce: '2026.09.04',
    writtenDateObj: '2026-06-09',
    practicalDateObj: '2026-08-08'
  },
  {
    round: '2026년 정기 기능사 4회 (현재 접수/대비중)',
    type: '정기',
    writtenApply: '2026.08.24 ~ 08.27',
    writtenExam: '2026.09.15 ~ 09.28',
    writtenAnnounce: '2026.10.07',
    practicalApply: '2026.10.12 ~ 10.15',
    practicalExam: '2026.11.14 ~ 12.02',
    finalAnnounce: '2026.12.11',
    writtenDateObj: '2026-09-20',
    practicalDateObj: '2026-11-15'
  },
  {
    round: '2026년 상시 기능사 (조리·미용·굴착기·지게차 등)',
    type: '상시',
    writtenApply: '매주 목 10:00 ~ 금 18:00',
    writtenExam: '매주 월 ~ 금 (상시 운영)',
    writtenAnnounce: '시험 당일 즉시 발표',
    practicalApply: '격주 수 10:00 ~ 목 18:00',
    practicalExam: '원서접수 후 약 2주 뒤',
    finalAnnounce: '시험 후 2주차 금요일',
    writtenDateObj: '2026-09-10',
    practicalDateObj: '2026-10-15'
  }
];

export const MOCK_QUESTIONS_MAP: Record<string, CBTQuestion[]> = {
  'info-processing': [
    {
      id: 1,
      subject: '전자계산기일반',
      question: '2진수 (101101)₂을 16진수로 올바르게 변환한 것은?',
      options: ['2D₁₆', '2B₁₆', '55₁₆', '35₁₆'],
      answer: 1, // 2B₁₆
      explanation: '2진수를 4자리씩 묶으면 (0010)(1101)₂입니다. (0010)₂ = 2, (1101)₂ = 13(B)이므로 16진수로는 2B₁₆가 됩니다.',
      year: '2024년 기출'
    },
    {
      id: 2,
      subject: '전자계산기일반',
      question: '다음 중 컴퓨터의 주기억장치와 CPU 사이의 속도 차이를 극복하기 위해 사용되는 고속 메모리는?',
      options: ['가상 기억장치(Virtual Memory)', '캐시 메모리(Cache Memory)', '보조 기억장치(Auxiliary Memory)', '플래시 메모리(Flash Memory)'],
      answer: 1, // 캐시 메모리
      explanation: 'CPU(중앙처리장치)와 주기억장치(RAM)의 처리 속도 차이를 줄여 고속 처리를 가능하게 하는 기억장치는 캐시 메모리(SRAM 사용)입니다.',
      year: '2024년 기출'
    },
    {
      id: 3,
      subject: 'PC운영체제',
      question: 'UNIX/Linux 운영체제에서 현재 작업 디렉터리의 파일 및 폴더 목록을 확인할 때 사용하는 명령어는?',
      options: ['pwd', 'cd', 'ls', 'mkdir'],
      answer: 2, // ls
      explanation: 'ls(list) 명령어는 현재 디렉터리의 파일 목록을 출력합니다. pwd는 현재 작업 디렉터리 경로 출력, cd는 디렉터리 이동, mkdir는 새 디렉터리 생성입니다.',
      year: '2023년 기출'
    },
    {
      id: 4,
      subject: '패키지활용',
      question: '관계형 데이터베이스(RDBMS)에서 SQL의 데이터 조작어(DML)에 해당하지 않는 것은?',
      options: ['SELECT', 'INSERT', 'UPDATE', 'CREATE'],
      answer: 3, // CREATE
      explanation: 'CREATE, ALTER, DROP은 데이터 정의어(DDL)에 속합니다. DML은 SELECT, INSERT, UPDATE, DELETE 입니다.',
      year: '2024년 기출'
    },
    {
      id: 5,
      subject: '정보통신일반',
      question: 'OSI 7계층 참조 모델 중 단말기 간의 데이터 전송 오류 검출 및 흐름 제어를 담당하며 대표적으로 TCP 프로토콜이 동작하는 계층은?',
      options: ['물리 계층(Physical Layer)', '전송 계층(Transport Layer)', '네트워크 계층(Network Layer)', '응용 계층(Application Layer)'],
      answer: 1, // 전송 계층
      explanation: '전송 계층(Transport Layer, 4계층)은 종단간(End-to-End) 신뢰성 있는 데이터 전송, 흐름 제어, 오류 제어를 담당하며 대표적으로 TCP, UDP가 있습니다.',
      year: '2023년 기출'
    },
    {
      id: 6,
      subject: '패키지활용',
      question: '스프레드시트에서 특정 범위 내에서 조건에 맞는 셀의 개수만을 구하고자 할 때 사용하는 함수는?',
      options: ['SUMIF', 'COUNTIF', 'AVERAGEIF', 'IFERROR'],
      answer: 1, // COUNTIF
      explanation: 'COUNTIF(범위, 조건)는 지정한 범위에서 조건과 일치하는 셀의 개수를 카운트하는 함수입니다.',
      year: '2023년 기출'
    }
  ],
  'electrician': [
    {
      id: 1,
      subject: '전기이론',
      question: '저항이 10Ω인 도선에 5A의 전류가 흐르고 있을 때 이 도선 양단에 걸리는 전압[V]은?',
      options: ['2V', '15V', '50V', '0.5V'],
      answer: 2, // 50V
      explanation: '옴의 법칙(Ohm\'s Law) V = I × R = 5A × 10Ω = 50V 입니다.',
      year: '2024년 기출'
    },
    {
      id: 2,
      subject: '전기이론',
      question: '자계(자기장) 내에서 전류가 흐르는 도선이 받는 전자기력(전자력)의 방향을 결정하는 법칙은?',
      options: ['플레밍의 왼손 법칙', '플레밍의 오른손 법칙', '렌츠의 법칙', '앙페르의 오른나사 법칙'],
      answer: 0, // 플레밍의 왼손 법칙
      explanation: '전동기 원리(전류가 받는 힘의 방향)는 플레밍의 왼손 법칙(FBI: 엄지-힘, 검지-자기장, 중지-전류)입니다. 발전기 유도기전력 방향은 오른손 법칙입니다.',
      year: '2024년 기출'
    },
    {
      id: 3,
      subject: '전기기기',
      question: '직류 발전기에서 유기 기전력의 교류를 직류로 변환하여 외부 회로로 공급하는 역할을 하는 장치는?',
      options: ['계자', '전기자', '정류자', '브러시'],
      answer: 2, // 정류자
      explanation: '정류자(Commutator)는 전기자 권선에서 유도되는 교류 기전력을 직류로 정류하는 역할을 합니다.',
      year: '2023년 기출'
    },
    {
      id: 4,
      subject: '전기설비',
      question: '금속관 공사에서 관의 굵기를 선정할 때, 절연전선의 피복 절연물을 포함한 단면적의 총합계는 관 내부 단면적의 몇 % 이하가 되도록 시설해야 하는가? (단, 굵기가 다른 절연전선일 경우)',
      options: ['20%', '32%', '48%', '60%'],
      answer: 1, // 32%
      explanation: '금속관 공사 시 동일 굵기 전선은 48% 이하, 굵기가 서로 다른 전선은 32% 이하로 수용하여야 합니다.',
      year: '2024년 기출'
    },
    {
      id: 5,
      subject: '전기설비',
      question: '한국전기설비규정(KEC)에 따른 저압 전로의 전선 색상 매칭 중 중성선(N)의 식별 색상으로 올바른 것은?',
      options: ['갈색', '흑색', '청색', '녹·황색'],
      answer: 2, // 청색
      explanation: 'KEC 전선 색상 규정: L1(갈색), L2(흑색), L3(회색), N(중성선: 청색), PE(보호도체: 녹·황색 배색)입니다.',
      year: '2024년 기출'
    }
  ],
  'korean-cook': [
    {
      id: 1,
      subject: '위생관리 및 안전관리',
      question: '세균성 식중독 중 내열성 아포(포자)를 형성하여 통조림, 진공포장 식품 등 혐기성 상태에서 증식하며 치명적인 신경독소(Neurotoxin)를 분비하는 균은?',
      options: ['살모넬라균', '황색포도상구균', '클로스트리디움 보툴리눔균', '장염비브리오균'],
      answer: 2, // 보툴리눔균
      explanation: '클로스트리디움 보툴리눔균(Clostridium botulinum)은 편성 혐기성 간균으로 아포를 형성하며 80℃ 이상에서 파괴되는 강력한 신경독(보툴리누스 독소)을 생성합니다.',
      year: '2024년 기출'
    },
    {
      id: 2,
      subject: '음식조리',
      question: '전통 한식에서 육원전(동그랑땡)을 만들 때 고기와 두부의 가장 이상적인 배합 비율은?',
      options: ['고기 1 : 두부 1', '고기 3 : 두부 1', '고기 5 : 두부 1', '고기 1 : 두부 3'],
      answer: 1, // 고기 3 : 두부 1
      explanation: '육원전 및 완자탕 조리 시 으깬 고기와 물기 짠 두부의 표준 배합비율은 고기 3 : 두부 1 입니다.',
      year: '2023년 기출'
    },
    {
      id: 3,
      subject: '재료선별 및 구매',
      question: '신선한 달걀을 감별하는 방법으로 옳지 않은 것은?',
      options: ['햇빛에 비추어 보았을 때 공기실(기실)이 작은 것', '10% 식염수에 넣었을 때 가라앉는 것', '껍데기 표면이 매끈거리고 윤기가 흐르는 것', '깼을 때 노른자가 봉긋하고 흰자의 경계가 뚜렷한 것'],
      answer: 2, // 껍데기 표면이 매끈거리고 윤기
      explanation: '신선한 달걀은 큐티클층이 남아있어 표면이 까칠까칠합니다. 매끈거리고 광택이 나는 것은 오래되어 큐티클층이 벗겨진 달걀입니다.',
      year: '2024년 기출'
    }
  ]
};

export const INITIAL_SUMMARY_NOTES: SummaryNote[] = [
  {
    id: 'sn-1',
    examId: 'info-processing',
    subject: '전자계산기일반',
    title: '진법 변환 & 2의 보수 계산 공식',
    frequency: '매우높음',
    corePoints: [
      '2진수 → 8진수: 3자리씩 묶어서 8진수로 변환',
      '2진수 → 16진수: 4자리씩 묶어서 16진수로 변환 (10:A, 11:B, 12:C, 13:D, 14:E, 15:F)',
      '1의 보수: 0은 1로, 1은 0으로 비트 반전',
      '2의 보수: 1의 보수에 최하위 비트 +1 더하기'
    ]
  },
  {
    id: 'sn-2',
    examId: 'info-processing',
    subject: '패키지활용',
    title: 'SQL DDL vs DML vs DCL 핵심 구분',
    frequency: '매우높음',
    corePoints: [
      'DDL (정의어): CREATE, ALTER, DROP, TRUNCATE',
      'DML (조작어): SELECT, INSERT, UPDATE, DELETE',
      'DCL (제어어): GRANT, REVOKE, COMMIT, ROLLBACK',
      'SELECT 문 기본 구조: SELECT 컬럼 FROM 테이블 WHERE 조건 GROUP BY 그룹 HAVING 조건 ORDER BY 정렬'
    ]
  },
  {
    id: 'sn-3',
    examId: 'electrician',
    subject: '전기이론',
    title: '전기기능사 3대 핵심 법칙 (옴·쿨롱·플레밍)',
    frequency: '매우높음',
    corePoints: [
      '옴의 법칙: V = I × R, I = V / R, R = V / I',
      '전력 공식: P = V × I = I²R = V² / R [W]',
      '플레밍의 왼손 법칙: 전동기(모터) 원리 (F-B-I: 엄지=힘, 검지=자기장, 중지=전류)',
      '플레밍의 오른손 법칙: 발전기 원리 (유도기전력 방향)'
    ]
  },
  {
    id: 'sn-4',
    examId: 'electrician',
    subject: '전기설비',
    title: 'KEC 전선 색상 및 접지 기준',
    frequency: '매우높음',
    corePoints: [
      '상별 전선 색상: L1(갈색), L2(흑색), L3(회색)',
      '중성선(N): 청색 (Blue)',
      '보호도체(PE): 녹색-황색 배색',
      '금속관 굵기 동일 전선 48%, 다른 굵기 32% 이하 수용'
    ]
  },
  {
    id: 'sn-5',
    examId: 'korean-cook',
    subject: '위생관리',
    title: '세균성 식중독균 종류별 특징 요약',
    frequency: '매우높음',
    corePoints: [
      '살모넬라: 계란, 육류, 잠복기 12~24시간, 발열 복통',
      '황색포도상구균: 화농성 질환자 손, 엔테로톡신(내열성 독소), 잠복기 1~6시간(가장 짧음)',
      '보툴리누스균: 통조림, 혐기성, 신경독, 치사율 높음',
      '장염비브리오: 어패류, 호염균(3% 식염 선호), 여름철 다발'
    ]
  }
];
