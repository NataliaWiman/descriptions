"use client";

import React, { useEffect, useState } from "react";
import { Spread } from "@/types";

const SpreadView = ({ spread }: { spread: Spread | null }) => {
  const [currentHover, setCurrentHover] = useState<number | null>(null);
  const [maxCardsInRow, setMaxCardsInRow] = useState(0);

  useEffect(() => {
    if (spread && spread.layout) {
      setMaxCardsInRow(Math.max(...spread.layout));
    }
  }, [spread]);

  if (!spread || !spread.layout || !spread.positions) {
    return null;
  }
  let positionIndex = 0;
  let cardPosition = 0;

  return (
    <div className="spread flex max-lg:flex-col items-center gap-2 lg:gap-6 lg:px-6 lg:pb-6 rounded-xl">
      <div
        style={{ paddingInline: `${15 / maxCardsInRow}%` }}
        className={`flex flex-col gap-4 w-[85%] lg:w-[60%] lg:py-10 rounded-xl`}
      >
        {spread.layout.map((cardsInRow, rowIndex) => {
          const rowPositions = spread.positions.slice(
            positionIndex,
            positionIndex + cardsInRow
          );
          positionIndex += cardsInRow;

          return (
            <div
              key={rowIndex}
              className={`flex gap-4 justify-center items-center`}
            >
              {rowPositions.map((pos, i) => {
                const getWidth = 100 / maxCardsInRow;
                cardPosition += 1;
                return (
                  <div
                    key={i}
                    style={{ width: `${getWidth}%` }}
                    className={`aspect-[3/4]`}
                  >
                    {(() => {
                      const cardNum = cardPosition;
                      cardPosition = cardNum;
                      return (
                        <div
                          onMouseEnter={() => setCurrentHover(cardNum)}
                          onMouseLeave={() => setCurrentHover(null)}
                          className={`group relative flex flex-col items-center gap-2.5 lg:gap-3.5 w-full h-full p-3 pt-[25%] rounded-2xl shadow-md cursor-pointer ${
                            currentHover === cardNum
                              ? "bg-peach-100/50"
                              : "bg-peach-100"
                          }`}
                        >
                          <span className="-mt-3 font-bold text-2xl lg:text-4xl text-coffee-500 font-title">
                            {cardNum}
                          </span>
                          <span className="font-bold text-sm lg:text-lg leading-tight text-center text-coffee-700 line-clamp-4">
                            {pos.title}
                          </span>
                        </div>
                      );
                    })()}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="lg:w-[60%] py-5 px-4 bg-peach-200 rounded-xl">
        <ul>
          {spread.positions.map((pos, i) => (
            <li
              onMouseEnter={() => setCurrentHover(i + 1)}
              onMouseLeave={() => setCurrentHover(null)}
              key={i}
              className={`flex w-full items-start gap-3 lg:gap-5 py-2 lg:py-4 lg:px-6 text-coffee-800 rounded-lg ${
                currentHover === i + 1 ? "bg-peach-400" : ""
              }`}
            >
              <span className="inline-block max-lg:-mt-0.5 tabular-nums font-title font-bold text-2xl lg:text-4xl leading-6 text-coffee-800">
                {i + 1}
              </span>
              <p className="flex flex-col lg:gap-2 text-base lg:text-xl leading-6">
                <span className="font-bold">{pos.title}</span>
                <span>{pos.description}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpreadView;
