import React from "react";

const Header1 = ({
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
      width={24}
      height={24}
    >
      <path d="M4 12h8m-8 6V6m8 12V6m5 6 3-2v8" />
    </svg>
  );
};

export default Header1;
