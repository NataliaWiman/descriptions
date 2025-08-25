import React from "react";

const Header2 = ({
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
      <path d="M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </svg>
  );
};

export default Header2;
