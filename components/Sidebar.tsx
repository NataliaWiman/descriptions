"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import StyledText from "@/utils/styledText";
import Icon from "./icons/Icon";
import { Card } from "@/types";
import { usePathname } from "next/navigation";
import QuickLinks from "./QuickLinks";
import { romeNumerals } from "@/data/romeNumerals";
import { fetchCards } from "@/utils/fetch";
import getSuits from "@/utils/getSuits";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setIsLoading] = useState(true);
  const path = usePathname();
  const activeCardRef = useRef<HTMLLIElement | null>(null);

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

  // Scroll to the active card when the component renders or updates
  useEffect(() => {
    if (activeCardRef.current) {
      activeCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [path, cards]);

  // Filter and group cards by suit
  const groupedCards = getSuits().reduce((groups, suit) => {
    groups[suit] = cards.filter(
      (card) =>
        card.suit === suit &&
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return groups;
  }, {} as Record<string, Card[]>);

  return (
    <>
      <aside
        className={`fixed lg:sticky self-start top-0 left-0 w-full h-screen bg-peach-200 text-coffee-800  z-20 transition-transform ${
          isSidebarVisible ? "" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          className={`lg:hidden fixed top-2 z-40 ${
            isSidebarVisible ? "right-4" : "-right-8"
          }`}
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        >
          {isSidebarVisible ? (
            <Icon name="close" className="w-6 h-6 text-coffee-800" />
          ) : (
            <Icon name="alignRight" className="w-6 h-6 text-coffee-800" />
          )}
        </button>
        <div className="flex flex-col max-h-screen overflow-y-auto overflow-x-visible no-scrollbar scroll-smooth">
          <div className="px-3 pt-4 pb-20 border-r border-peach-500">
            <Link href="/">
              <h2 className="mb-3 font-title font-bold text-xl text-center text-coffee-800">
                FableBookTarot
              </h2>
            </Link>
            <div className="flex mb-4 pr-8 md:pr-0">
              <input
                type="text"
                placeholder="Search cards"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 text-sm rounded-lg bg-peach-400 text-coffee-800 placeholder:text-cream-700/80 outline-none ring-1 ring-transparent focus:ring-peach-500 transition-all"
              />
            </div>
            {loading ? (
              <div className="flex justify-center items-center h-20">
                <Icon
                  name="spinner"
                  className="w-6 h-6 text-cream-200 fill-coffee-600 "
                />
              </div>
            ) : (
              <>
                <div className="sticky top-0 py-2 bg-greige-100 z-30">
                  <QuickLinks />
                </div>
                {getSuits().map((suit, index) => (
                  <div key={index} className="relative py-2">
                    {!searchTerm && (
                      <div className="sticky bg-peach-200 top-14 lg:top-10 z-20">
                        <div className="flex h-9 items-center justify-center">
                          <h3 className="px-2 pt-4 pb-3 text-lg font-bold text-coffee-700">
                            {suit}
                          </h3>
                        </div>
                      </div>
                    )}
                    <ul id={suit} className="scroll-mt-20">
                      {groupedCards[suit]?.map((card: Card, index) => (
                        <li
                          key={card.id}
                          ref={path.includes(card.id) ? activeCardRef : null}
                        >
                          <Link
                            href={`/cards/${card.id}`}
                            className={`block p-2 rounded-lg transition-colors  ${
                              path.includes(card.id)
                                ? "bg-peach-500"
                                : "hover:bg-peach-400"
                            }`}
                            onClick={() => setIsSidebarVisible(false)}
                          >
                            {card.suit === "Major Arcana" ? (
                              <h3 className="flex justify-between items-center">
                                <span className="font-bold">{card.name}</span>
                                <span className="text-sm tracking-tight">
                                  {romeNumerals[index]}
                                </span>
                              </h3>
                            ) : (
                              <StyledText text={card.name} />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
