import React from "react";

const Spreads = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7v10M6 5v14" />
      <rect width={12} height={18} x={10} y={3} rx={2} />
    </svg>
  );
};

export default Spreads;
