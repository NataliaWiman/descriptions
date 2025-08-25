import React from "react";
import { TableOfContentDataItem } from "@tiptap-pro/extension-table-of-contents";

interface ToCItemProps {
  item: TableOfContentDataItem;
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export const ToCItem: React.FC<ToCItemProps> = ({ item, onItemClick }) => {
  if (!item.id) return null;
  const getItemClasses = (level: number) => {
    if (level === 2) {
      return "text-lg";
    } else if (level === 3) {
      return "pl-5 text-base";
    } else {
      return "text-base";
    }
  };
  return (
    <li
      className={`group flex transition-all ${
        item.isActive ? "text-linen-950" : "text-linen-900/70"
      } `} //${item.isScrolledOver ? "opacity-50" : ""}
    >
      <span
        className={`text-2xl leading-5 transition-all ${
          item.isActive
            ? "text-linen-800"
            : "text-transparent group-hover:text-linen-900/30"
        }`}
      >
        &bull;
      </span>
      <a
        href={`#${item.id}`}
        onClick={(e) => onItemClick(e, item.id)}
        data-item-index={item.itemIndex}
        className={`block w-full h-full px-2 font-bold hover:text-linen-900 ${getItemClasses(
          item.level
        )} ${item.level}`}
      >
        {item.textContent}
      </a>
    </li>
  );
};
