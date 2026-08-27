import { ExamInfo, QNetRoundSchedule, CBTQuestion, SummaryNote } from '../types';

export const INITIAL_EXAMS: ExamInfo[] = [
  {
    id: 'info-processing',
    name: '정보처리기능사',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-20',
    practicalTargetDate: '2026-11-15',
    testLocation: '서울국가자격시험센터 2층',
    testTime: '11:40 (입실 11:20)',
    subjects: ['정보통신일반', '컴퓨터구조', '프로그래밍언어', '데이터베이스', '정보보안'],
    tips: [
      '프로그래밍: C언어, Python 문법 및 선택정렬, 거품정렬 등 정렬 알고리즘 숙지',
      '데이터베이스: SQL 문법 (SELECT, INSERT, UPDATE, DELETE) 완벽 학습',
      '네트워크: OSI 7계층, TCP/IP, 프로토콜별 포트번호 암기',
      '보안: 대칭키/비대칭키 암호화, SQL Injection, XSS 공격 방어법'
    ]
  },
  {
    id: 'electrician',
    name: '전기기능사',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 60,
    examDurationMinutes: 60,
    writtenTargetDate: '2026-09-22',
    practicalTargetDate: '2026-11-28',
    testLocation: '인천디지털시험센터 2층',
    testTime: '09:00 (입실 08:40)',
    subjects: ['전기이론', '전기기기', '전기설비'],
    tips: [
      '전기이론: 옴의 법칙, 쿨롱의 법칙, RLC 회로 공식 숙지',
      '전기설비: 전선 굵기, 접지공사 규격, 배선공사 암기 필수',
      '공학용 계산기 지참 가능 (허용군 모델 확인)'
    ]
  },
  {
    id: 'electrical-engineer',
    name: '전기산업기사',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 80,
    examDurationMinutes: 120,
    writtenTargetDate: '2026-10-10',
    practicalTargetDate: '2026-12-05',
    testLocation: '서울국가자격시험센터',
    testTime: '10:00 (입실 09:40)',
    subjects: ['전기이론', '전기기기', '전력', '전기설비', '제어'],
    tips: [
      '기능사 수준보다 2배 이상 심화된 이론과 계산 필요',
      '3상 교류 회로, 전력, 제어 회로 완벽 숙지',
      '전기설비기술기준 및 내선규정 상세 학습',
      '공학용 계산기 필수 (로그, 삼각함수 등)'
    ]
  },
  {
    id: 'hazmat-engineer',
    name: '위험물산업기사',
    agency: '한국산업인력공단 (Q-Net)',
    passingScore: 60,
    totalQuestions: 80,
    examDurationMinutes: 120,
    writtenTargetDate: '2026-10-15',
    practicalTargetDate: '2026-12-10',
    testLocation: '서울국가자격시험센터',
    testTime: '14:00 (입실 13:40)',
    subjects: ['위험물의성질', '예방및소화', '관련법규'],
    tips: [
      '위험물 6대 분류: 산화제·산화성고체, 가연성·인화성 물질, 자연발화물질, 위험성 있는 물질 완벽 숙지',
      '소화방법별 특성: 냉각, 질식, 억제, 격리 이해',
      '관련법규: 위험물안전관리법, 운반기준, 저장기준 암기',
      '용기 및 표시: 위험물 표지, 라벨, 주의사항 정확히 학습'
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
    { id: 1, subject: '정보통신일반', question: 'OSI 7계층 모델에서 IP(Internet Protocol)가 동작하는 계층은?', options: ['데이터링크 계층', '네트워크 계층', '전송 계층', '응용 계층'], answer: 1, explanation: 'IP는 OSI 7계층 모델의 3계층(네트워크 계층)에서 동작하는 프로토콜입니다.', year: '2024년 기출' },
    { id: 2, subject: '정보통신일반', question: 'TCP와 UDP의 차이점으로 가장 적절한 것은?', options: ['TCP는 비연결형, UDP는 연결형', 'TCP는 신뢰성 보장, UDP는 신뢰성 미보장', 'TCP는 속도가 빠름, UDP는 속도가 느림', 'TCP는 브로드캐스트 지원, UDP는 미지원'], answer: 1, explanation: 'TCP는 연결형이고 신뢰성을 보장하는 반면, UDP는 비연결형이고 신뢰성을 보장하지 않습니다.', year: '2024년 기출' },
    { id: 3, subject: '정보통신일반', question: 'HTTP 프로토콜의 기본 포트 번호는?', options: ['80', '443', '25', '110'], answer: 0, explanation: 'HTTP의 기본 포트는 80번이며, HTTPS는 443번입니다.', year: '2023년 기출' },
    { id: 4, subject: '정보통신일반', question: 'DNS의 주요 기능은?', options: ['이메일 전송', '도메인명을 IP주소로 변환', '파일 전송', '원격 접속'], answer: 1, explanation: 'DNS(Domain Name System)는 도메인명(www.example.com)을 IP주소로 변환하는 서비스입니다.', year: '2024년 기출' },
    { id: 5, subject: '정보통신일반', question: 'DHCP의 역할로 가장 적절한 것은?', options: ['도메인명 해석', '동적 IP주소 할당', '메일 송수신', '파일 공유'], answer: 1, explanation: 'DHCP(Dynamic Host Configuration Protocol)는 클라이언트에게 동적으로 IP주소를 할당합니다.', year: '2024년 기출' },
    { id: 6, subject: '컴퓨터구조', question: 'CPU의 연산 결과를 임시로 저장하는 메모리는?', options: ['RAM', '캐시 메모리', '레지스터', 'ROM'], answer: 2, explanation: '레지스터는 CPU 내부에 있는 초고속 메모리로 연산 결과를 임시 저장합니다.', year: '2024년 기출' },
    { id: 7, subject: '컴퓨터구조', question: '캐시 메모리의 특징으로 가장 적절한 것은?', options: ['가장 저렴하다', '용량이 매우 크다', '속도가 빠르고 용량이 작다', 'CPU와 무관하다'], answer: 2, explanation: '캐시 메모리는 CPU와 주기억장치 사이에서 속도를 향상시키기 위해 빠르고 용량이 작은 메모리입니다.', year: '2024년 기출' },
    { id: 8, subject: '컴퓨터구조', question: 'ROM의 특징으로 가장 적절한 것은?', options: ['전원이 꺼지면 데이터 소실', '읽기만 가능하고 쓰기 불가능', '매우 빠른 속도', '프로그래밍 가능'], answer: 1, explanation: 'ROM(Read Only Memory)은 읽기만 가능하고 쓰기가 불가능한 메모리입니다.', year: '2023년 기출' },
    { id: 9, subject: '컴퓨터구조', question: '버스(Bus)의 역할은?', options: ['데이터 저장', '컴퓨터 부품 간 데이터 전송', '연산 수행', '주소 저장'], answer: 1, explanation: '버스는 CPU, 메모리, 입출력 장치 등 컴퓨터 부품들 간에 데이터를 전송하는 통로입니다.', year: '2024년 기출' },
    { id: 10, subject: '컴퓨터구조', question: '클럭(Clock) 속도의 단위는?', options: ['MB', 'GB', 'GHz', 'KB'], answer: 2, explanation: 'CPU의 클럭 속도는 GHz(기가헤르츠) 단위로 측정됩니다. 1GHz = 10억 클럭 사이클/초', year: '2024년 기출' },
    { id: 11, subject: '프로그래밍언어', question: 'C언어에서 정수형 변수를 선언하는 방법은?', options: ['char x;', 'int x;', 'float x;', 'string x;'], answer: 1, explanation: 'C언어에서 정수형 변수는 int로 선언합니다.', year: '2024년 기출' },
    { id: 12, subject: '프로그래밍언어', question: 'Python에서 리스트(list)에 요소를 추가하는 메서드는?', options: ['add()', 'append()', 'insert()', 'push()'], answer: 1, explanation: 'Python에서 리스트에 요소를 추가할 때는 append() 메서드를 사용합니다.', year: '2024년 기출' },
    { id: 13, subject: '프로그래밍언어', question: '다음 중 거품 정렬(Bubble Sort)의 시간복잡도는?', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], answer: 2, explanation: '거품 정렬의 시간복잡도는 최악의 경우 O(n²)입니다.', year: '2023년 기출' },
    { id: 14, subject: '프로그래밍언어', question: 'C언어에서 배열을 함수로 전달할 때 주의사항은?', options: ['배열의 크기도 함께 전달해야 함', '배열은 포인터로 전달됨', '배열의 첫 번째 주소가 전달됨', '위 모두 정답'], answer: 3, explanation: '배열은 함수에 포인터로 전달되므로 배열의 크기를 함께 전달하고 첫 주소가 전달됩니다.', year: '2024년 기출' },
    { id: 15, subject: '프로그래밍언어', question: 'for 루프에서 break 명령의 역할은?', options: ['루프를 일시 중단', '루프를 건너뜀', '루프를 완전히 탈출', '프로그램 종료'], answer: 2, explanation: 'break는 루프를 완전히 탈출하는 명령입니다.', year: '2024년 기출' },
    { id: 16, subject: '데이터베이스', question: 'SQL의 SELECT 문에서 조건을 지정하는 절은?', options: ['FROM', 'WHERE', 'ORDER BY', 'GROUP BY'], answer: 1, explanation: 'WHERE 절은 SELECT 문에서 조건을 지정합니다.', year: '2024년 기출' },
    { id: 17, subject: '데이터베이스', question: 'PRIMARY KEY의 특징으로 가장 적절한 것은?', options: ['중복 허용, NULL 허용', '중복 불허, NULL 허용', '중복 불허, NULL 불허', '중복 허용, NULL 불허'], answer: 2, explanation: 'PRIMARY KEY는 중복을 허용하지 않고 NULL 값도 허용하지 않습니다.', year: '2024년 기출' },
    { id: 18, subject: '데이터베이스', question: 'JOIN의 종류로 올바르지 않은 것은?', options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'REVERSE JOIN'], answer: 3, explanation: 'REVERSE JOIN은 존재하지 않습니다. INNER, LEFT, RIGHT, FULL OUTER JOIN 등이 있습니다.', year: '2023년 기출' },
    { id: 19, subject: '데이터베이스', question: 'GROUP BY와 함께 자주 사용되는 함수는?', options: ['SUBSTR()', 'COUNT()', 'UPPER()', 'LOWER()'], answer: 1, explanation: 'GROUP BY는 COUNT(), SUM(), AVG() 등 집계함수와 함께 사용됩니다.', year: '2024년 기출' },
    { id: 20, subject: '데이터베이스', question: '정규화(Normalization)의 목적은?', options: ['데이터 검색 속도 증가', '데이터 중복 제거 및 무결성 보장', '테이블 수 증가', '용량 증가'], answer: 1, explanation: '정규화는 데이터 중복을 제거하고 데이터 무결성을 보장하기 위한 과정입니다.', year: '2024년 기출' },
    { id: 21, subject: '정보보안', question: '대칭키 암호화의 장점은?', options: ['키 배송 문제 없음', '속도가 빠름', '보안성이 높음', '널리 표준화됨'], answer: 1, explanation: '대칭키 암호화는 알고리즘이 간단하고 속도가 빠릅니다.', year: '2024년 기출' },
    { id: 22, subject: '정보보안', question: 'SQL Injection 공격의 방어 방법으로 가장 적절한 것은?', options: ['암호화만 사용', '입력값 검증 및 매개변수화된 쿼리 사용', '방화벽 설치', '파일 권한 변경'], answer: 1, explanation: 'SQL Injection 공격은 입력값을 검증하고 매개변수화된 쿼리를 사용하여 방어할 수 있습니다.', year: '2024년 기출' },
    { id: 23, subject: '정보보안', question: 'XSS(Cross Site Scripting) 공격의 특징은?', options: ['서버 다운', '웹 브라우저에서 악의적 스크립트 실행', '네트워크 마비', '전체 시스템 암호화'], answer: 1, explanation: 'XSS 공격은 웹 페이지에 악의적인 스크립트를 삽입하여 사용자 브라우저에서 실행되는 공격입니다.', year: '2024년 기출' },
    { id: 24, subject: '정보보안', question: '방화벽의 주요 기능은?', options: ['바이러스 제거', '허가되지 않은 접근 제어', '암호화', '백업'], answer: 1, explanation: '방화벽은 네트워크 경계에서 허가되지 않은 접근을 제어하는 역할을 합니다.', year: '2023년 기출' },
    { id: 25, subject: '정보보안', question: 'SSL/TLS의 역할은?', options: ['데이터 압축', '통신 암호화 및 보안 연결 제공', 'CPU 성능 향상', '메모리 관리'], answer: 1, explanation: 'SSL/TLS는 웹 통신을 암호화하고 보안 연결을 제공합니다.', year: '2024년 기출' },
    { id: 26, subject: '컴퓨터구조', question: '멀티프로세싱(Multiprocessing)의 특징은?', options: ['프로세스 간 메모리 공유', '여러 CPU에서 동시 처리', '하나의 CPU 사용', '무조건 빠름'], answer: 1, explanation: '멀티프로세싱은 여러 개의 CPU 코어를 사용하여 여러 프로세스를 동시에 처리하는 방식입니다.', year: '2024년 기출' },
    { id: 27, subject: '프로그래밍언어', question: '선택 정렬(Selection Sort)의 시간복잡도는?', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], answer: 2, explanation: '선택 정렬의 시간복잡도는 O(n²)입니다.', year: '2024년 기출' },
    { id: 28, subject: '정보통신일반', question: 'ARP 프로토콜의 역할은?', options: ['도메인명 변환', 'IP주소를 MAC주소로 변환', '메일 송수신', '파일 전송'], answer: 1, explanation: 'ARP(Address Resolution Protocol)는 IP주소를 MAC주소로 변환합니다.', year: '2024년 기출' },
    { id: 29, subject: '정보통신일반', question: 'FTP 프로토콜의 기본 포트는?', options: ['21', '25', '110', '143'], answer: 0, explanation: 'FTP(File Transfer Protocol)의 기본 포트는 21번입니다.', year: '2023년 기출' },
    { id: 30, subject: '정보통신일반', question: 'SMTP와 POP3의 차이점은?', options: ['전송 vs 수신', '수신 vs 전송', '모두 같음', '전송 vs 압축'], answer: 0, explanation: 'SMTP는 이메일 전송, POP3는 이메일 수신에 사용됩니다.', year: '2024년 기출' },
    { id: 31, subject: '데이터베이스', question: '관계형 데이터베이스에서 행(Row)을 무엇이라 하는가?', options: ['필드', 'Record/Tuple', '컬럼', '키'], answer: 1, explanation: '행(Row)은 record 또는 tuple이라고 부르며, 하나의 데이터 레코드입니다.', year: '2024년 기출' },
    { id: 32, subject: '데이터베이스', question: 'DELETE와 DROP의 차이점은?', options: ['없음', 'DELETE는 데이터만 삭제, DROP은 구조까지 삭제', 'DROP이 더 빠름', 'DELETE가 더 빠름'], answer: 1, explanation: 'DELETE는 데이터만 삭제하고 구조는 유지, DROP은 테이블 전체를 삭제합니다.', year: '2024년 기출' },
    { id: 33, subject: '데이터베이스', question: 'FOREIGN KEY의 역할은?', options: ['유일성 보장', '참조 무결성 보장', '데이터 순서 지정', '접근 권한 관리'], answer: 1, explanation: 'FOREIGN KEY는 다른 테이블의 PRIMARY KEY를 참조하여 참조 무결성을 보장합니다.', year: '2024년 기출' },
    { id: 34, subject: '정보보안', question: '비대칭키 암호화의 특징은?', options: ['빠른 속도', '공개키와 개인키 사용', '더 간단함', '더 오래됨'], answer: 1, explanation: '비대칭키 암호화는 공개키(public key)와 개인키(private key)를 사용합니다.', year: '2024년 기출' },
    { id: 35, subject: '정보보안', question: 'DDoS 공격의 목적은?', options: ['데이터 탈취', '시스템 다운', '프로그램 감염', '로그 삭제'], answer: 1, explanation: 'DDoS(Distributed Denial of Service) 공격은 많은 클라이언트에서 동시에 서버에 요청을 보내 시스템을 다운시키는 것입니다.', year: '2024년 기출' },
    { id: 36, subject: '컴퓨터구조', question: 'CPU에서 명령을 실행하는 단계로 가장 적절한 것은?', options: ['읽기→실행→쓰기', '인출→해독→실행→저장', '쓰기→읽기→실행', '해독→실행→인출'], answer: 1, explanation: 'CPU 명령 실행은 인출(Fetch)→해독(Decode)→실행(Execute)→저장(Write Back) 순서입니다.', year: '2024년 기출' },
    { id: 37, subject: '프로그래밍언어', question: 'C에서 포인터 변수 선언 방법은?', options: ['*ptr;', 'int* ptr;', '&ptr;', 'ptr*;'], answer: 1, explanation: 'C에서 포인터 변수는 int* ptr; 처럼 타입 다음에 *를 붙여 선언합니다.', year: '2023년 기출' },
    { id: 38, subject: '프로그래밍언어', question: 'Python에서 딕셔너리(dictionary)의 특징은?', options: ['순서 없음, 중복 가능', '순서 있음, 중복 불가', 'key-value 쌍으로 구성', 'value만 저장'], answer: 2, explanation: '딕셔너리는 key-value 쌍으로 구성되어 key로 value를 검색합니다.', year: '2024년 기출' },
    { id: 39, subject: '정보통신일반', question: 'VPN의 역할은?', options: ['속도 증가', '보안 연결 제공', '용량 증가', '가격 인하'], answer: 1, explanation: 'VPN(Virtual Private Network)은 공중망을 통해 보안된 사설 네트워크를 구성합니다.', year: '2024년 기출' },
    { id: 40, subject: '정보통신일반', question: 'NAT의 역할은?', options: ['DNS 변환', 'IP주소 변환', '이메일 라우팅', '영상 스트리밍'], answer: 1, explanation: 'NAT(Network Address Translation)는 사설 IP를 공인 IP로 변환합니다.', year: '2024년 기출' },
    { id: 41, subject: '데이터베이스', question: 'LIKE 연산자의 와일드카드 % 의미는?', options: ['정확히 하나의 문자', '0개 이상의 문자', '숫자만', '특수문자'], answer: 1, explanation: 'LIKE 연산자의 %는 0개 이상의 문자를 나타내는 와일드카드입니다.', year: '2024년 기출' },
    { id: 42, subject: '데이터베이스', question: '인덱스(Index)의 목적은?', options: ['데이터 보안', '검색 속도 향상', '데이터 암호화', '용량 감소'], answer: 1, explanation: '인덱스는 데이터 검색 속도를 향상시키기 위해 생성됩니다.', year: '2024년 기출' },
    { id: 43, subject: '정보보안', question: '해시(Hash) 함수의 특징은?', options: ['복호화 가능', '단방향 암호화', '느린 속도', '키 필요'], answer: 1, explanation: '해시 함수는 원래 데이터를 해시값으로 변환하는 단방향 함수입니다.', year: '2024년 기출' },
    { id: 44, subject: '정보보안', question: '인증(Authentication)과 인가(Authorization)의 차이는?', options: ['같은 의미', '인증은 신원 확인, 인가는 권한 확인', '인증이 더 중요', '인가가 더 중요'], answer: 1, explanation: '인증(Authentication)은 사용자의 신원을 확인하고, 인가(Authorization)는 사용자의 권한을 확인합니다.', year: '2024년 기출' },
    { id: 45, subject: '컴퓨터구조', question: 'RAID의 역할은?', options: ['CPU 성능 향상', '디스크 안정성 및 성능 향상', '메모리 확장', '네트워크 연결'], answer: 1, explanation: 'RAID(Redundant Array of Independent Disks)는 여러 디스크를 함께 사용하여 안정성과 성능을 향상시킵니다.', year: '2024년 기출' },
    { id: 46, subject: '프로그래밍언어', question: '재귀함수(Recursive Function)의 주의사항은?', options: ['항상 반복문이 필요', '종료 조건이 필수', '성능이 항상 좋음', '사용 금지'], answer: 1, explanation: '재귀함수는 무한 루프를 방지하기 위해 반드시 종료 조건이 있어야 합니다.', year: '2023년 기출' },
    { id: 47, subject: '정보통신일반', question: '라우터의 기능은?', options: ['파일 저장', '패킷을 적절한 경로로 전달', '이메일 송수신', '데이터 압축'], answer: 1, explanation: '라우터는 패킷을 목적지까지 최적의 경로로 전달하는 네트워크 장치입니다.', year: '2024년 기출' },
    { id: 48, subject: '정보통신일반', question: '스위치의 역할은?', options: ['경로 결정', '같은 네트워크의 기기들을 연결', '인터넷 제공', '신호 증폭'], answer: 1, explanation: '스위치(Switch)는 같은 네트워크 내의 기기들을 연결하는 장치입니다.', year: '2024년 기출' },
    { id: 49, subject: '프로그래밍언어', question: '동적 메모리 할당 함수는?', options: ['create()', 'malloc()', 'new()', 'allocate()'], answer: 1, explanation: 'C 언어에서는 malloc() 함수로 동적 메모리를 할당합니다.', year: '2024년 기출' },
    { id: 50, subject: '프로그래밍언어', question: '메모리 누수(Memory Leak)의 원인은?', options: ['좋은 알고리즘', '할당된 메모리 미해제', '변수 선언 과다', '함수 호출 과다'], answer: 1, explanation: '메모리 누수는 할당된 동적 메모리를 해제하지 않을 때 발생합니다.', year: '2024년 기출' },
    { id: 51, subject: '데이터베이스', question: 'ORDER BY 절 없이 결과를 정렬하면?', options: ['자동 정렬됨', '정렬되지 않을 수 있음', '오류 발생', '무조건 역순'], answer: 1, explanation: 'ORDER BY 절을 사용하지 않으면 결과의 순서를 보장할 수 없습니다.', year: '2024년 기출' },
    { id: 52, subject: '데이터베이스', question: 'UNION과 UNION ALL의 차이는?', options: ['없음', 'UNION은 중복 제거, UNION ALL은 중복 허용', 'UNION ALL이 더 빠름', '속도 차이 없음'], answer: 1, explanation: 'UNION은 중복을 제거하고, UNION ALL은 중복을 허용합니다.', year: '2024년 기출' },
    { id: 53, subject: '정보보안', question: '트로이목마(Trojan Horse)의 특징은?', options: ['자기 복제 가능', '정상 프로그램으로 위장', '느린 시스템', '자동 삭제됨'], answer: 1, explanation: '트로이목마는 정상적인 프로그램으로 위장하여 악의적인 코드를 실행시킵니다.', year: '2024년 기출' },
    { id: 54, subject: '정보보안', question: '백신 프로그램의 역할은?', options: ['성능 향상', '악성코드 탐지 및 제거', '속도 증가', '용량 증가'], answer: 1, explanation: '백신은 악성코드(바이러스, 악웨어 등)를 탐지하고 제거합니다.', year: '2024년 기출' },
    { id: 55, subject: '컴퓨터구조', question: '가상 메모리(Virtual Memory)의 장점은?', options: ['더 빠름', '주 메모리 부족 문제 해결', '보안성 증가', '비용 절감'], answer: 1, explanation: '가상 메모리는 보조기억장치를 메모리처럼 사용하여 메모리 부족 문제를 해결합니다.', year: '2024년 기출' },
    { id: 56, subject: '정보통신일般', question: 'IPv6의 주소 길이는?', options: ['32비트', '64비트', '128비트', '256비트'], answer: 2, explanation: 'IPv6 주소는 128비트(16바이트)이며 IPv4의 32비트보다 훨씬 깁니다.', year: '2023년 기출' },
    { id: 57, subject: '데이터베이스', question: '트랜잭션(Transaction)의 특징 ACID 중 C는?', options: ['Commit', 'Consistency', 'Concurrency', 'Cascade'], answer: 1, explanation: 'ACID의 C는 Consistency(일관성)로 트랜잭션 전후의 데이터 일관성을 유지합니다.', year: '2024년 기출' },
    { id: 58, subject: '프로그래밍언어', question: '구조체(struct)의 용도는?', options: ['변수 1개만 선언', '여러 타입의 데이터를 하나로 묶기', '배열만 가능', '함수 정의'], answer: 1, explanation: '구조체는 서로 다른 타입의 여러 데이터를 하나의 자료형으로 묶기 위해 사용합니다.', year: '2024년 기출' },
    { id: 59, subject: '정보보안', question: '방화벽의 종류가 아닌 것은?', options: ['패킷 필터링 방화벽', 'Stateful 방화벽', '프록시 방화벽', 'CPU 방화벽'], answer: 3, explanation: 'CPU 방화벽은 존재하지 않으며, 패킷 필터링, Stateful, 프록시 방화벽 등이 있습니다.', year: '2024년 기출' },
    { id: 60, subject: '정보통신일般', question: '클라이언트-서버 모델의 특징은?', options: ['중앙 집중식', '모든 기기가 동등', '비용 저렴', '속도가 빠름'], answer: 0, explanation: '클라이언트-서버 모델은 서버가 중앙에서 자원을 관리하고 클라이언트가 요청하는 중앙 집중식 구조입니다.', year: '2024년 기출' }
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
  'electrical-engineer': [
    {
      id: 1,
      subject: '전기이론',
      question: '3상 교류에서 선간 전압이 220V일 때, 상별 전압(선중성점 전압)은 몇 V인가?',
      options: ['110V', '127V', '154V', '220V'],
      answer: 1, // 127V
      explanation: '3상 교류의 상별 전압(Y결선) = 선간전압 / √3 = 220V / √3 ≈ 127V입니다.',
      year: '2024년 기출'
    },
    {
      id: 2,
      subject: '전력',
      question: '전력을 P(W), 전류를 I(A), 저항을 R(Ω)이라 할 때, 다음 중 옳은 식은?',
      options: ['P = V²/R', 'P = I²R', 'P = VI cosθ', '위 모두 옳음'],
      answer: 3, // 위 모두 옳음
      explanation: '교류 전력은 P = VI cosθ(실전력, W), 저항에서의 손실 P = I²R, P = V²/R 모두 성립합니다.',
      year: '2023년 기출'
    },
    {
      id: 3,
      subject: '전기기기',
      question: '3상 유도전동기에서 회전자의 회전 속도가 동기속도보다 느린 이유는?',
      options: ['마찰 손실', '슬립(Slip)으로 인한 유도 기전력 발생', '부하 토크 증가', '자기 포화'],
      answer: 1, // 슬립
      explanation: '3상 유도전동기는 회전자의 회전속도가 회전 자기장의 동기속도보다 약간 느린 슬립(Slip) 상태로 작동하므로 회전자에 유도기전력이 발생하여 전류가 흐릅니다.',
      year: '2024년 기출'
    },
    {
      id: 4,
      subject: '제어',
      question: '릴레이 제어 회로에서 전자석에 전류가 흐를 때 발생하는 과전압(과도 현상)을 막기 위해 사용하는 소자는?',
      options: ['다이오드', '저항', '콘덴서', '코일'],
      answer: 0, // 다이오드
      explanation: '전자석 코일의 자속이 갑자기 변할 때 유도 기전력으로 인한 과전압이 발생합니다. 이를 방지하기 위해 다이오드를 역방향으로 병렬 연결합니다(프리휠링 다이오드).',
      year: '2023년 기출'
    },
    {
      id: 5,
      subject: '전기이론',
      question: '정현파 교류 전압 v(t) = 170sin(100πt) [V]의 유효값은 몇 V인가?',
      options: ['85V', '100V', '120V', '170V'],
      answer: 2, // 120V
      explanation: '정현파 교류의 유효값 = 최대값 / √2 = 170V / √2 ≈ 120V입니다.',
      year: '2024년 기출'
    }
  ]
};

export const INITIAL_SUMMARY_NOTES: SummaryNote[] = [
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
    examId: 'electrical-engineer',
    subject: '전기이론',
    title: '전기산업기사 3상 교류 및 복소수 표현',
    frequency: '매우높음',
    corePoints: [
      '3상 교류: 선간전압 = √3 × 상별전압 (Y결선)',
      '복소수 표현: V = V∠θ (극형식), Z = R + jX (직각형식)',
      '임피던스: Z = R + j(XL - XC), 어드미턴스: Y = 1/Z',
      '전력: 실전력 P = VI cosθ(W), 무효전력 Q = VI sinθ(VAR), 피상전력 S = VI(VA)'
    ]
  },
  {
    id: 'sn-6',
    examId: 'electrical-engineer',
    subject: '전기기기',
    title: '3상 유도전동기 기본 개념',
    frequency: '매우높음',
    corePoints: [
      '동기속도 Ns = 120f/P (f: 주파수, P: 극수)',
      '슬립 S = (Ns - N) / Ns × 100(%)',
      '회전자 주파수 = 슬립 × 전원주파수',
      '토크 ∝ 슬립 전류 × 자기장 강도'
    ]
  },
  {
    id: 'sn-7',
    examId: 'electrical-engineer',
    subject: '제어',
    title: '제어 회로 기본 소자 및 동작',
    frequency: '높음',
    corePoints: [
      '프리휠링 다이오드: 전자석 코일의 과전압 방지',
      'PLC(프로그래머블 로직 컨트롤러): 산업용 자동제어',
      '시간 지연 릴레이(타이머): ON/OFF 딜레이 조절',
      '근접센서, 광센서 등 디지털 입출력 신호'
    ]
  }
];

// 자격증별 기본 CBT 문제 생성 함수
export const generateDefaultMockQuestions = (exam: ExamInfo): CBTQuestion[] => {
  const questions: CBTQuestion[] = [];
  const subjects = exam.subjects || ['핵심이론', '기출문제'];
  const totalQuestions = exam.totalQuestions || 60;
  const examName = exam.name;

  // 자격증별 문제풀
  const questionPools: Record<string, Array<{ q: string; opts: string[]; ans: number }>> = {
    '정보처리기능사': [
      { q: '다음 중 가장 효율적인 정렬 알고리즘은?', opts: ['거품정렬', '퀵정렬', '삽입정렬', '선택정렬'], ans: 1 },
      { q: 'C언어에서 포인터 변수 선언은?', opts: ['*ptr;', 'int *ptr;', '&ptr;', 'ptr*;'], ans: 1 },
      { q: 'SQL SELECT 문의 조건절은?', opts: ['FROM', 'WHERE', 'ORDER', 'GROUP'], ans: 1 },
      { q: 'TCP와 UDP의 차이점은?', opts: ['속도', '신뢰성', '포트번호', '대역폭'], ans: 1 },
      { q: '네트워크의 3계층은?', opts: ['데이터링크', '네트워크', '전송', '응용'], ans: 1 },
      { q: 'OSI 7계층 모델은?', opts: ['5계층', '6계층', '7계층', '8계층'], ans: 2 },
      { q: '데이터베이스의 PRIMARY KEY 특징은?', opts: ['중복허용', '중복불허', '수정가능', '삭제가능'], ans: 1 },
      { q: 'Python 리스트에 요소 추가는?', opts: ['add()', 'append()', 'insert()', 'push()'], ans: 1 },
      { q: '정규화의 목적은?', opts: ['속도증가', '중복제거', '암호화', '압축'], ans: 1 },
      { q: 'HTTP 기본 포트는?', opts: ['21', '25', '80', '110'], ans: 2 },
      { q: 'DNS의 역할은?', opts: ['이메일', 'IP변환', '파일전송', '접근제어'], ans: 1 },
      { q: '캐시 메모리의 특징은?', opts: ['저렴', '빠름', '큼', '느림'], ans: 1 },
    ],
    '전기기능사': [
      { q: '옴의 법칙 V = I × R에서 R은?', opts: ['전류', '전압', '저항', '전력'], ans: 2 },
      { q: '전력의 단위는?', opts: ['A', 'V', 'W', 'Ω'], ans: 2 },
      { q: '플레밍의 왼손 법칙은?', opts: ['발전기', '전동기', '변압기', '차단기'], ans: 1 },
      { q: 'KEC에서 L1 전선의 색상은?', opts: ['검은색', '갈색', '회색', '파란색'], ans: 1 },
      { q: '중성선의 색상은?', opts: ['갈색', '검은색', '파란색', '녹황색'], ans: 2 },
      { q: '금속관 공사의 전선 수용률은?', opts: ['20%', '32%', '48%', '60%'], ans: 2 },
      { q: '직류 발전기의 정류자 역할은?', opts: ['계자', '전류변환', '속도조절', '절연'], ans: 1 },
      { q: '접지의 목적은?', opts: ['성능향상', '안전성', '속도증가', '효율성'], ans: 1 },
      { q: '퓨즈의 역할은?', opts: ['절연', '과전류보호', '정류', '변압'], ans: 1 },
      { q: '변압기의 기본원리는?', opts: ['전자력', '전자기유도', '정전기', '자기장'], ans: 1 },
      { q: '차단기는 무엇을 감지하는가?', opts: ['온도', '전류', '전압', '주파수'], ans: 1 },
      { q: '콘덴서의 역할은?', opts: ['저항', '리액턴스', '에너지저장', '변환'], ans: 2 },
    ],
    '전기산업기사': [
      { q: '3상 교류의 선간전압 계산은?', opts: ['V', 'V/√3', 'V×√3', 'V/2'], ans: 2 },
      { q: '동기속도 Ns = 120f/P는 무엇인가?', opts: ['주파수', '극수', '동기속도', '슬립'], ans: 2 },
      { q: '슬립의 정의는?', opts: ['손실', '속도차', '토크', '저항'], ans: 1 },
      { q: '3상 유도전동기의 회전원리는?', opts: ['정전기', '회전자기장', '직류', '교류'], ans: 1 },
      { q: '복소수 표현 Z = R + jX는?', opts: ['전압', '임피던스', '어드미턴스', '전류'], ans: 1 },
      { q: '실전력 P의 단위는?', opts: ['VA', 'VAR', 'W', 'Hz'], ans: 2 },
      { q: '프리휠링 다이오드의 역할은?', opts: ['정류', '과전압방지', '정압', '리액턴스'], ans: 1 },
      { q: '릴레이 제어에서 타이머는?', opts: ['전류제어', '시간지연', '전압제어', '거리제어'], ans: 1 },
      { q: 'PLC의 용도는?', opts: ['전원공급', '자동제어', '신호전송', '데이터저장'], ans: 1 },
      { q: '근접센서는 무엇을 감지하는가?', opts: ['빛', '거리', '온도', '습도'], ans: 1 },
      { q: '전자석의 자력은 무엇에 의존하는가?', opts: ['온도', '전류', '거리', '재질'], ans: 1 },
      { q: 'RAID의 목적은?', opts: ['속도향상', '안정성향상', '비용절감', '공간절약'], ans: 1 },
    ],
    '위험물산업기사': [
      { q: '위험물의 분류 중 자연발화성 물질은?', opts: ['1류', '2류', '3류', '4류'], ans: 2 },
      { q: '황린의 자연발화 온도는?', opts: ['30°C', '60°C', '100°C', '200°C'], ans: 0 },
      { q: '위험물 저장소의 거리기준은?', opts: ['5m 이상', '10m 이상', '15m 이상', '20m 이상'], ans: 2 },
      { q: '소화기의 종류가 아닌 것은?', opts: ['물소화기', '분말소화기', '액체소화기', '전자소화기'], ans: 3 },
      { q: '과산화수소의 위험물 분류는?', opts: ['1류', '2류', '5류', '6류'], ans: 2 },
      { q: '위험물의 예방 및 소화법에서 먼저 해야 할 일은?', opts: ['진화', '격리', '냉각', '통풍'], ans: 1 },
      { q: '질산염류의 혼합금지 물질은?', opts: ['산', '염기', '유기물', '금속'], ans: 2 },
      { q: '철분이 들어있는 물질과 혼합 금지는?', opts: ['산소', '염소', '불소', '수소'], ans: 1 },
      { q: '위험물 적재시 최고높이는?', opts: ['2m', '3m', '4m', '5m'], ans: 2 },
      { q: '용기 시험 주기는?', opts: ['1년', '2년', '3년', '5년'], ans: 2 },
      { q: '운반차량의 주차장 거리는?', opts: ['10m', '20m', '30m', '50m'], ans: 3 },
      { q: '위험물 표지판의 크기는?', opts: ['10cm', '20cm', '30cm', '40cm'], ans: 2 },
      { q: '화염전파 속도가 0.5m/s 이상인 물질은?', opts: ['가연성고체', '가연성액체', '가연성가스', '산화제'], ans: 2 },
      { q: '폭발물의 감도 기준은?', opts: ['매우낮음', '낮음', '높음', '매우높음'], ans: 3 },
    ],
    '기계기능사': [
      { q: '기어의 전달 효율은?', opts: ['60~70%', '70~80%', '80~90%', '90~95%'], ans: 3 },
      { q: '윤활유의 점도 단위는?', opts: ['Pa', 'cP', 'N', 'm'], ans: 1 },
      { q: '베어링의 역할은?', opts: ['고정', '회전', '지지', '전달'], ans: 2 },
      { q: '공기압축기의 배출압 범위는?', opts: ['1~3bar', '5~10bar', '10~20bar', '20~30bar'], ans: 1 },
      { q: '공작기계의 정밀도 오차는?', opts: ['±0.1mm', '±0.01mm', '±0.001mm', '±0.0001mm'], ans: 2 },
      { q: '드릴의 절삭 각도는?', opts: ['90도', '118도', '140도', '160도'], ans: 1 },
      { q: '선반의 회전수 조절은?', opts: ['풀리', '베어링', '스프로킷', '캠'], ans: 0 },
      { q: '밀링 커터의 재질은?', opts: ['강철', '고속강', 'HSS', '초경합금'], ans: 3 },
      { q: '용접 시 아크 길이는?', opts: ['2~3mm', '3~5mm', '5~10mm', '10~20mm'], ans: 1 },
      { q: '도가니의 용액 온도는?', opts: ['500°C', '800°C', '1200°C', '1500°C'], ans: 2 },
      { q: '설계도의 축척 표기는?', opts: ['1:10', '1:100', '1:1000', '모두가능'], ans: 3 },
      { q: '표면처리 방법이 아닌 것은?', opts: ['도금', '산화', '열처리', '회전'], ans: 3 },
    ],
    '용접기능사': [
      { q: '가스 용접의 온도는?', opts: ['2000°C', '3000°C', '3200°C', '3500°C'], ans: 2 },
      { q: '아크 용접의 전류 범위는?', opts: ['10~20A', '50~100A', '100~500A', '500~1000A'], ans: 2 },
      { q: '용접 결함 중 언더컷은?', opts: ['용접금속 부족', '균열', '포로', '표면오목'], ans: 3 },
      { q: '플럭스의 역할은?', opts: ['가열', '산화방지', '냉각', '경화'], ans: 1 },
      { q: '용접 자세 중 오버헤드는?', opts: ['1G', '2G', '4G', '모두가능'], ans: 2 },
      { q: '산소의 역할은?', opts: ['연소지원', '냉각', '절단', '용해'], ans: 0 },
      { q: '용접봉의 직경 선택은?', opts: ['판두께 무관', '판두께에 따라', '용접기 종류', '시공방법'], ans: 1 },
      { q: 'MIG 용접에서 와이어는?', opts: ['전극', '심선', '본체', '가스'], ans: 0 },
      { q: '역극성 용접은?', opts: ['('-)', '(+)', '교류', '직류'], ans: 1 },
      { q: '용접 후 어닐링의 목적은?', opts: ['강도증가', '응력제거', '표면경화', '산화방지'], ans: 1 },
      { q: '스테인리스강 용접 온도는?', opts: ['100~200°C', '200~400°C', '400~600°C', '600~800°C'], ans: 2 },
      { q: '용접 후 냉각 속도는?', opts: ['빨라야함', '느려야함', '무관', '재료에따라'], ans: 1 },
    ],
    '조리기능사': [
      { q: '육류의 적정 보관 온도는?', opts: ['-5°C', '-10°C', '-18°C', '-25°C'], ans: 2 },
      { q: '계란의 신선도 검사는?', opts: ['색상', '부유법', '무게', '냄새'], ans: 1 },
      { q: '소금의 염도 기준은?', opts: ['5%', '10%', '15%', '20%'], ans: 1 },
      { q: '설탕의 카라멜화 온도는?', opts: ['100°C', '130°C', '160°C', '180°C'], ans: 2 },
      { q: '국물의 끓임 정도는?', opts: ['미숙한 끓임', '약한 끓임', '보글보글', '강한 끓임'], ans: 2 },
      { q: '생선의 신선도 판단은?', opts: ['눈', '아가미', '냄새', '모두'], ans: 3 },
      { q: '유지의 발연점은?', opts: ['80°C', '120°C', '160°C', '200°C'], ans: 3 },
      { q: '야채 다듬기의 기본은?', opts: ['청결', '균일', '낭비감소', '모두'], ans: 3 },
      { q: '데치기의 목적은?', opts: ['익히기', '색상유지', '향기제거', '물기제거'], ans: 1 },
      { q: '소스의 종류 중 베샤멜은?', opts: ['고기수', '생크림', '우유', '토마토'], ans: 2 },
      { q: '양념의 기본 3요소는?', opts: ['염기산', '짠단신', '달큰맛', '매콤달'], ans: 1 },
      { q: '온도계의 정확도는?', opts: ['±0.5°C', '±1°C', '±2°C', '±5°C'], ans: 1 },
    ],
  };

  // 해당 자격증의 문제풀 선택, 없으면 일반 문제풀로 대체
  let pool = questionPools[examName] || questionPools['기계기능사'];

  // 각 과목당 문제 수 계산
  const questionsPerSubject = Math.floor(totalQuestions / subjects.length);
  let questionId = 1;

  subjects.forEach((subject) => {
    for (let i = 0; i < questionsPerSubject && questionId <= totalQuestions; i++) {
      const poolItem = pool[(i + questionId) % pool.length];
      const optionIndices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
      const correctIndex = optionIndices.indexOf(poolItem.ans);

      questions.push({
        id: questionId++,
        subject,
        question: poolItem.q,
        options: optionIndices.map(idx => poolItem.opts[idx]),
        answer: correctIndex,
        explanation: `${poolItem.q}의 정답은 "${poolItem.opts[poolItem.ans]}"입니다.`,
        year: '2024년 기출'
      });
    }
  });

  // 부족한 문제 채우기
  while (questions.length < totalQuestions) {
    const poolItem = pool[questions.length % pool.length];
    const optionIndices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    const correctIndex = optionIndices.indexOf(poolItem.ans);

    questions.push({
      id: questions.length + 1,
      subject: subjects[questions.length % subjects.length],
      question: poolItem.q,
      options: optionIndices.map(idx => poolItem.opts[idx]),
      answer: correctIndex,
      explanation: `${poolItem.q}의 정답은 "${poolItem.opts[poolItem.ans]}"입니다.`,
      year: '2024년 기출'
    });
  }

  return questions.slice(0, totalQuestions);
};
