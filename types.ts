import { UUID } from "crypto";

export type Card = {
  id: string;
  name: string;
  suit: string;
};

export type Suit = "Major Arcana" | "Wands" | "Cups" | "Swords" | "Pentacles";

export type Position = {
  id: number;
  title: string;
  description: string;
};

export type Spread = {
  id: UUID;
  name: string;
  categories: string[];
  positions: Position[];
  layout: number[];
};
