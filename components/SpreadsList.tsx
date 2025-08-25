"use client";
import { Spread } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import SpreadView from "./Spread";

const SpreadsList = ({ spreads }: { spreads: Spread[] }) => {
  const activeSpreadRef = useRef<HTMLDivElement | null>(null);
  const [openedSpread, setOpenedSpread] = useState<Spread | null>(null);

  const toggleSpread = (spread: Spread) => {
    setOpenedSpread((prev) => (prev && prev.id === spread.id ? null : spread));
  };

  useEffect(() => {
    if (activeSpreadRef.current) {
      activeSpreadRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [openedSpread]);

  return (
    <section className="flex flex-col lg:gap-4 max-w-screen-lg mx-auto scroll-smooth">
      {spreads.map((spread) => {
        const isSpreadOpen = openedSpread && openedSpread.id === spread.id;
        return (
          <div
            ref={isSpreadOpen ? activeSpreadRef : null}
            key={spread.id}
            className={`scroll-mt-20 rounded-xl overflow-hidden ${
              isSpreadOpen ? "bg-peach-200" : "bg-transition"
            }`}
          >
            <h2
              onClick={() => toggleSpread(spread)}
              className={`font-secondary py-4 lg:py-5 px-4 lg:px-6 font-bold text-lg lg:text-2xl text-coffee-700 rounded-xl transition-all cursor-pointer ${
                isSpreadOpen ? "text-center" : "hover:bg-peach-200"
              }`}
            >
              {spread.name}
            </h2>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                isSpreadOpen
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <SpreadView spread={spread} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SpreadsList;
