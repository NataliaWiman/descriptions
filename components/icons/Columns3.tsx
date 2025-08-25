import React from "react";

const Columns3 = ({
  className,
  strokeWidth,
}: {
  className: string;
  strokeWidth?: number;
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width={18} height={18} x={3} y={3} rx={2} />
      <path d="M9 3v18m6-18v18" />
    </svg>
  );
};

export default Columns3;
