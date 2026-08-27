import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon resembling the calendar with checkmark, clock arc and text */}
      <div className={`relative ${dimensions} shrink-0 drop-shadow-sm`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Calendar Body Base */}
          <rect
            x="14"
            y="24"
            width="92"
            height="86"
            rx="18"
            fill="#FFFFFF"
            stroke="#0052CC"
            strokeWidth="7"
          />

          {/* Calendar Top Header Bar */}
          <path
            d="M17.5 40C17.5 30.5 25.5 24 35 24H85C94.5 24 102.5 30.5 102.5 40V42H17.5V40Z"
            fill="url(#topBarGradient)"
          />

          {/* Top Hanging Loops */}
          <rect x="34" y="10" width="8" height="24" rx="4" fill="#0052CC" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="78" y="10" width="8" height="24" rx="4" fill="#0052CC" stroke="#FFFFFF" strokeWidth="2.5" />

          {/* Clock Arc on upper right */}
          <path
            d="M74 56C76 53 80 51 84 51C90.5 51 95.5 56 95.5 62.5C95.5 66 94 69 91.5 71.5"
            stroke="#2684FF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Clock Hands */}
          <path d="M84 57V63H89" stroke="#0052CC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Big Stylized Checkmark cutting across the calendar */}
          <path
            d="M32 66L47 81L85 41"
            stroke="#0052CC"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 66L47 81L85 41"
            stroke="#2684FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* D-DAY Text */}
          <text
            x="69"
            y="76"
            fill="#0052CC"
            fontSize="14"
            fontWeight="900"
            fontFamily="'Hanken Grotesk', sans-serif"
            letterSpacing="-0.03em"
          >
            D-DAY
          </text>

          {/* 기능사 Text */}
          <text
            x="24"
            y="102"
            fill="#003B95"
            fontSize="22"
            fontWeight="900"
            fontFamily="'Plus Jakarta Sans', 'Noto Sans KR', sans-serif"
            letterSpacing="-0.04em"
          >
            기능사
          </text>

          {/* Gradients */}
          <defs>
            <linearGradient id="topBarGradient" x1="17.5" y1="24" x2="102.5" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0066FF" />
              <stop offset="1" stopColor="#003B95" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-hanken font-extrabold text-xl text-[#00288e] tracking-tight">
              D-DAY 기능사
            </span>
            <span className="bg-[#dde1ff] text-[#001453] text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Master
            </span>
          </div>
          <span className="text-[11px] text-[#444653] font-medium leading-none">
            국가기술자격 시험 대비 플래너
          </span>
        </div>
      )}
    </div>
  );
};
