import React from "react";

const Italic = ({
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
      <path d="M19 4h-9m4 16H5M15 4 9 20" />
    </svg>
  );
};

export default Italic;
