import React from "react";

const Pentacles = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-12.95 4.95 4.95-4.95 4.95-4.95-4.95zm0 2.828-2.121 2.122 2.12 2.121 2.122-2.121z" />
    </svg>
  );
};

export default Pentacles;
