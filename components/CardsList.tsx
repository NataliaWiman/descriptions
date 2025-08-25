"use client";

import { Card } from "@/types";
import { fetchCards } from "@/utils/fetch";
import React, { useEffect, useState } from "react";
import TarotCard from "./TarotCard";
import Icon from "./icons/Icon";
import getSuits from "@/utils/getSuits";

const CardsList = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCards = async () => {
      setIsLoading(true);
      try {
        const cardsData = await fetchCards();
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCards();
  }, []);

  // Filter and group cards by suit
  const groupedCards = getSuits().reduce((groups, suit) => {
    groups[suit] = cards.filter((card) => card.suit === suit);
    return groups;
  }, {} as Record<string, Card[]>);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <Icon
            name="spinner"
            className="w-6 h-6 text-linen-200 fill-linen-600 "
          />
        </div>
      ) : (
        <>
          {getSuits().map((suit, index) => (
            <div
              key={index}
              className="relative py-2 px-2 lg:px-4 pb-5 lg:pb-20"
            >
              <div className="max-lg:sticky max-lg:top-12 flex items-center justify-center z-10">
                <h3 className="mb-2 px-2 py-1 lg:py-4 text-base font-bold text-linen-900 max-lg:bg-peach-100 max-lg:w-full max-lg:text-center">
                  {suit}
                </h3>
              </div>

              <ul
                id={suit}
                className="grid grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4 scroll-m-24"
              >
                {groupedCards[suit]?.map((card: Card) => (
                  <li
                    key={card.id}
                    className="flex flex-col gap-2 font-medium text-center"
                  >
                    <TarotCard
                      size={"small"}
                      title={card.name}
                      suit={card.suit}
                      cardId={card.id}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CardsList;
