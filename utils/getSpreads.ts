import { Spread } from "@/types";
import { randomUUID } from "crypto";

const spreads: Spread[] = [
  {
    id: randomUUID(),
    name: "Why can't I concentrate?",
    categories: ["mental health"],
    positions: [
      {
        id: 1,
        title: "Root cause",
        description: "What's at the core of my difficulty focusing right now?",
      },
      {
        id: 2,
        title: "What would help?",
        description: "What could help regain clarity or improve concentration?",
      },
      {
        id: 3,
        title: "Emotional Need",
        description:
          "What emotional need is unmet right now that might be affecting my ability to focus?",
      },
      {
        id: 4,
        title: "Physical Need",
        description: "What does my body need right now to support my focus?",
      },
    ],
    layout: [2, 2],
  },
  {
    id: randomUUID(),
    name: "Best Work Spot",
    categories: ["mental health", "choices"],
    positions: [
      {
        id: 1,
        title: "Option 1: Vibe",
        description:
          "What's the emotional or energetic feel of working from Option 1 today? Will it uplift or drain me?",
      },
      {
        id: 2,
        title: "Option 2: Vibe",
        description:
          "What's the emotional or energetic feel of Option 2? Does it support my current mood and needs?",
      },
      {
        id: 3,
        title: "Option 1: Productivity",
        description:
          "How likely am I to stay focused and productive if I choose Option 1?",
      },
      {
        id: 4,
        title: "Option 2: Productivity",
        description:
          "How likely am I to stay focused and productive if I choose Option 2?",
      },
      {
        id: 5,
        title: "Focus Booster",
        description:
          "Regardless of where I go, what could help me get in the zone and stay focused today?",
      },
    ],
    layout: [2, 2, 1],
  },
  {
    id: randomUUID(),
    name: "Clarity for a Decision",
    categories: ["mental health", "choices"],
    positions: [
      {
        id: 1,
        title: "Current State",
        description: "What is my emotional and mental state right now?",
      },
      {
        id: 2,
        title: "Option 1: Emotional Outcome",
        description: "How am I likely to feel if I go with Option 1?",
      },
      {
        id: 3,
        title: "Option 2: Emotional Outcome",
        description: "How am I likely to feel if I go with Option 2?",
      },
      {
        id: 4,
        title: "Ease the decision fatigue",
        description:
          "What mindset or small action can help reduce decision fatigue and bring clarity?",
      },
      {
        id: 5,
        title:
          "Which Option is more likely to leave me feeling emotionally fulfilled and content?",
        description:
          "Which Option is more likely to leave me feeling emotionally fulfilled and content?",
      },
    ],
    layout: [1, 2, 2],
  },
];

const getSpreads = () => {
  return spreads;
};

export default getSpreads;
