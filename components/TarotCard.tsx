"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { romeNumerals } from "@/data/romeNumerals";
import Icon from "./icons/Icon";
import Link from "next/link";

interface TarotCardProps {
  cardId: string;
  title: string;
  suit: string;
  size: "small" | "large";
}

const TarotCard = ({ title, suit, cardId, size }: TarotCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const getCardImage = () => {
    if (suit === "Major Arcana") {
      return `/cards/${cardId}.png`;
    } else {
      return "/cards/placeholder.png";
    }
  };

  return (
    <>
      <div
        ref={ref}
        className={`group lg:p-1 ${
          size === "small"
            ? "max-lg:border max-lg:border-greige-300 max-lg:rounded-md"
            : ""
        }`}
      >
        <Link
          href={`/cards/${cardId}`}
          className={`relative flex flex-col items-center w-full lg:p-2 bg-peach-400 lg:border lg:border-cream-300/50 lg:shadow-sm lg:shadow-coffee-800/50 ${
            size === "small"
              ? "rounded-md hover:lg:-translate-y-1 transition-all"
              : "rounded-lg"
          }`}
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowPreview(true);
            }}
            className={`hidden lg:block absolute right-5 p-2 bg-cream-100/25 hover:bg-cream-100/75 rounded-full cursor-pointer opacity-0 group-hover:opacity-50 z-10 transition-all ${
              size === "small" ? "bottom-12" : "bottom-16"
            }`}
          >
            <Icon
              name="zoom"
              className="w-6 h-6 pointer-events-none text-coffee-900"
            />
          </div>
          {suit === "Major Arcana" && (
            <h3
              className={`flex justify-center gap-2 w-full -mb-1 font-bold text-center leading-3 text-coffee-800 bg-peach-400 lg:border-2 border-peach-900 ${
                size === "small"
                  ? "pt-1 pb-1.5 text-[8px] lg:text-xs rounded-t-md"
                  : "pt-2 pb-2.5 text-sm rounded-t-lg"
              }`}
            >
              <span>{romeNumerals[Number(cardId.slice(1, 3))]}</span>
            </h3>
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-peach-100/10 hover:bg-transparent transition-colors" />
          <Image
            className={`w-full h-auto lg:border-2 border-peach-900 ${
              suit != "Major Arcana"
                ? size === "small"
                  ? "rounded-t-md"
                  : "rounded-t-lg"
                : ""
            }`}
            src={getCardImage()}
            width="700"
            height="700"
            alt=""
          />
          <h2
            className={`flex justify-center gap-2 w-full -mt-1 font-bold text-center leading-3 text-coffee-700 bg-peach-400 lg:border-2 border-peach-900 ${
              size === "small"
                ? "pt-1 lg:pt-2 pb-2 lg:pb-2.5 text-[11px] lg:text-base rounded-b-md"
                : "pt-3 pb-3.5 text-xl rounded-b-lg"
            }`}
          >
            <span className="font-title text-coffee-800 whitespace-nowrap">
              {title}
            </span>
          </h2>
        </Link>
      </div>
      {showPreview && (
        <div
          onClick={() => setShowPreview(false)}
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/80 z-50"
        >
          <div className="p-10">
            <Image
              className="w-full h-auto"
              src={getCardImage()}
              width="1000"
              height="1000"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TarotCard;
