import React from "react";
import {
  TableOfContentData,
  TableOfContentDataItem,
} from "@tiptap-pro/extension-table-of-contents";
import { Editor } from "@tiptap/react";
import { TextSelection } from "@tiptap/pm/state";
import { ToCItem } from "./ToCItem";
import { ToCEmptyState } from "./ToCEmptyState";

interface ToCProps {
  items: TableOfContentData;
  editor: Editor | null;
}

export const ToC: React.FC<ToCProps> = ({ items = [], editor }) => {
  if (items.length === 0) {
    return <ToCEmptyState />;
  }

  const onItemClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (editor) {
      const element = editor.view.dom.querySelector(
        `[data-toc-id="${id}"`
      ) as HTMLElement | null;

      if (element) {
        const pos = editor.view.posAtDOM(element, 0);

        const tr = editor.view.state.tr;
        tr.setSelection(new TextSelection(tr.doc.resolve(pos)));
        editor.view.dispatch(tr);
        editor.view.focus();

        if (history.pushState) {
          history.pushState(null, "", `#${id}`);
        }

        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <p className="mb-2 px-3 font-title font-bold text-lg text-linen-900">
        Contents:
      </p>
      <ul>
        {items.map(
          (item: TableOfContentDataItem) =>
            item.id && (
              <ToCItem onItemClick={onItemClick} item={item} key={item.id} />
            )
        )}
      </ul>
    </>
  );
};
