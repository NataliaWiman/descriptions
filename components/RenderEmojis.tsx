"use client";
import { Editor } from "@tiptap/core";
import React, { useState } from "react";
import ToolbarButton from "./Toolbar/ToolbarButton";
import { icons } from "./Icon";

type RenderEmojisTypes = {
  editor: Editor | null;
  onClose: () => void;
};

const RenderEmojis = ({ editor, onClose }: RenderEmojisTypes) => {
  const [iconSize, setIconSize] = useState(16);
  const [iconStroke, setIconStroke] = useState(3);
  const iconSizes = [16, 20, 24, 28, 32, 48];
  const iconStrokes = [1, 1.5, 2, 2.5, 3];
  const lucideIcons = [
    "key",
    "thumbDown",
    "thumbUp",
    "personStanding",
    "lifeBuoy",
    "circleQuestionMark",
    "handshake",
    "smile",
    "frown",
    "heart",
    "heartHandshake",
    "walletMinimal",
  ];

  const OptionButton = ({
    type,
    data,
    isActive,
  }: {
    type: "size" | "stroke";
    data: number;
    isActive: boolean;
  }) => {
    return (
      <button
        className={`flex items-center justify-center px-2 font-black text-sm rounded-full transition-all ${
          isActive
            ? "text-coffee-700 pointer-events-none"
            : "text-coffee-800/50 hover:text-coffee-700"
        }`}
        onClick={
          type === "size" ? () => setIconSize(data) : () => setIconStroke(data)
        }
      >
        {data}
      </button>
    );
  };
  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        <div className="flex flex-col">
          <p className="px-2 font-black text-xs tracking-wider uppercase text-coffee-600">
            Icon size
          </p>
          <div className="flex justify-center mx-auto py-1">
            {iconSizes.map((size, i) => (
              <OptionButton
                type="size"
                data={size}
                isActive={Boolean(size === iconSize)}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="px-2 font-black text-xs tracking-wider uppercase text-coffee-600">
            Stroke width
          </p>
          <div className="flex justify-center mx-auto py-1">
            {iconStrokes.map((stroke, i) => (
              <OptionButton
                type="stroke"
                data={stroke}
                isActive={Boolean(stroke === iconStroke)}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 py-2 px-1.5">
        {lucideIcons.map((icon, i) => (
          <div key={i}>
            <ToolbarButton
              onClick={() => {
                editor
                  ?.chain()
                  .focus()
                  .setLucideIcon(icon, iconSize, iconStroke)
                  .run();
                onClose();
              }}
              title={icon}
              icon={icon as keyof typeof icons}
              iconSize={iconSize}
              strokeWidth={iconStroke}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderEmojis;
