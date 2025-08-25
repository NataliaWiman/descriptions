import React from "react";

const TextUp = ({
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
      <path d="M3.5 13h6M2 16l4.5-9 4.5 9m7 0V7m-4 4 4-4 4 4" />
    </svg>
  );
};

export default TextUp;
