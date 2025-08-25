import { Suit } from "@/types";
import Link from "next/link";
import React from "react";
import Icon from "./icons/Icon";
import getSuits from "@/utils/getSuits";

const QuickLinks = () => {
  return (
    <div className="max-lg:sticky max-lg:top-0 flex flex-wrap justify-center gap-2 w-full max-lg:py-2 max-lg:bg-greige-100 z-20">
      {getSuits().map((suit: Suit, index) => {
        return (
          <Link
            key={index}
            href={`#${suit}`}
            className="group p-2 rounded transition-all bg-peach-400 hover:bg-peach-500"
            title={suit}
          >
            <Icon name={suit} className="w-4 h-4" />
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
