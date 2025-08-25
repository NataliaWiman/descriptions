import React from "react";

const MajorArcana = ({
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
      <circle cx={12} cy={12} r={2} />
      <path d="M12 2v4m-5.2 9-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7m17.4 10-3.5-2M9 22l3-8 3 8m-7 0h8" />
      <path d="M18 18.7a9 9 0 1 0-12 0" />
    </svg>
  );
};

export default MajorArcana;
