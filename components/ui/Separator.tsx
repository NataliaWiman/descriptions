import React from "react";

type SeparatorTypes = {
  title?: string;
};

const Separator = ({ title }: SeparatorTypes) => {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-coffee-400/50"></div>
      {title && (
        <span className="flex-shrink mx-2 font-black text-xs tracking-wider uppercase text-coffee-700/60">
          {title}
        </span>
      )}
      <div className="flex-grow border-t border-coffee-400/50"></div>
    </div>
  );
};

export default Separator;
