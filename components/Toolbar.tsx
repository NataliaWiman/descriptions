"use client";
import { Editor } from "@tiptap/core";
import React, { useState } from "react";
import { insertCardImage } from "@/utils/insertCardImage";
import { usePathname } from "next/navigation";
import ToolbarButton from "./Toolbar/ToolbarButton";
import LucideIcon from "./Icon";
import RenderEmojis from "./RenderEmojis";

type ToolbarTypes = {
  editor: Editor | null;
  isVisible: boolean;
};

const Toolbar = ({ editor, isVisible }: ToolbarTypes) => {
  const pathname = usePathname();
  const imageToInsert = pathname.slice(7).startsWith("1")
    ? pathname.slice(7)
    : "placeholder";
  const [showHeadingMenu, setShowHeadingMenu] = useState<boolean>(false);
  const [showCoverMenu, setShowCoverMenu] = useState<boolean>(false);
  const [showIconMenu, setShowIconMenu] = useState<boolean>(false);
  const [showBgFillMenu, setShowBgFillMenu] = useState<boolean>(false);
  const [showColumnsMenu, setShowColumnsMenu] = useState<boolean>(false);

  if (!editor) return null;

  const toggleHeadingMenu = () => {
    setShowHeadingMenu(!showHeadingMenu);
  };
  const toggleCoverMenu = () => {
    setShowCoverMenu(!showCoverMenu);
  };
  const toggleIconMenu = () => {
    setShowIconMenu(!showIconMenu);
  };
  const toggleBgFillMenu = () => {
    setShowBgFillMenu(!showBgFillMenu);
  };
  const toggleColumnsMenu = () => {
    setShowColumnsMenu(!showColumnsMenu);
  };

  const hasHeadingSelection =
    editor.isActive("heading", { level: 1 }) ||
    editor.isActive("heading", { level: 2 }) ||
    editor.isActive("heading", { level: 3 }) ||
    editor.isActive("heading", { level: 4 });

  const hasCoverSelection =
    editor.isActive("divWrapper", { class: "cover-content" }) ||
    editor.isActive("divWrapper", { class: "cover-image" });

  const hasBgFillSelection =
    editor.isActive("divWrapper", { class: "bg-darker" }) ||
    editor.isActive("divWrapper", { class: "bg-lighter" });

  const hasIconSelection =
    editor.isActive("spanWrapper", {
      class: "icon icon-thumbup",
    }) ||
    editor.isActive("spanWrapper", {
      class: "icon icon-thumbdown",
    });
  const hasColumnsSelection =
    editor.isActive("divWrapper", { class: "editor-columns-2" }) ||
    editor.isActive("divWrapper", { class: "editor-columns-3" });

  return (
    <div
      className={`flex flex-col gap-2 w-full md:w-auto -ml-4 md:-ml-3 transition-all ${
        isVisible ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex max-lg:flex-wrap divide-x-[1px] divide-coffee-200">
        <div className="flex gap-2 px-3">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleMark("bold").run()}
            hasClass={editor.isActive("bold")}
            title="Bold Text"
            icon="bold"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            hasClass={editor.isActive("italic")}
            title="Cursive Text"
            icon="italic"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            hasClass={editor.isActive("underline")}
            title="Underline Text"
            icon="underline"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            hasClass={editor.isActive("strike")}
            title="Strikethrough Text"
            icon="strike"
          />
        </div>
        <div className="relative flex gap-2 px-3 z-10">
          <button
            onClick={toggleHeadingMenu}
            title="Heading"
            className={`flex items-center justify-center h-8 min-w-8 px-2 rounded transition-all ${
              hasHeadingSelection
                ? "bg-ginger-200 hover:bg-ginger-300"
                : "bg-greige-100 hover:bg-peach-500"
            }`}
          >
            <LucideIcon
              name={
                hasHeadingSelection
                  ? editor.isActive("heading", { level: 1 })
                    ? "h1"
                    : editor.isActive("heading", { level: 2 })
                    ? "h2"
                    : editor.isActive("heading", { level: 3 })
                    ? "h3"
                    : editor.isActive("heading", { level: 4 })
                    ? "h4"
                    : "h"
                  : "h"
              }
              size={18}
              strokeWidth={2}
              color="#7f4323"
            />
            <LucideIcon
              name="chevronDown"
              size={12}
              strokeWidth={3}
              color="#a8764b"
            />
          </button>
          <div
            className={`absolute top-8 left-0 flex flex-col gap-1 p-2 bg-cream-50 rounded shadow-sm overflow-hidden transition-all ${
              showHeadingMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ToolbarButton
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                setShowHeadingMenu(false);
              }}
              hasClass={editor.isActive("heading", { level: 1 })}
              title="Heading 1"
              showTitle
              icon="h1"
            />
            <ToolbarButton
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                setShowHeadingMenu(false);
              }}
              hasClass={editor.isActive("heading", { level: 2 })}
              title="Heading 2"
              showTitle
              icon="h2"
            />
            <ToolbarButton
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 3 }).run();
                setShowHeadingMenu(false);
              }}
              hasClass={editor.isActive("heading", { level: 3 })}
              title="Heading 3"
              showTitle
              icon="h3"
            />
            <ToolbarButton
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 4 }).run();
                setShowHeadingMenu(false);
              }}
              hasClass={editor.isActive("heading", { level: 4 })}
              title="Heading 4"
              showTitle
              icon="h4"
            />
          </div>
        </div>

        <div className="flex gap-2 px-3">
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            hasClass={editor.isActive({ textAlign: "left" })}
            title="Align Left"
            icon="alignLeft"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            hasClass={editor.isActive({ textAlign: "center" })}
            title="Align Center"
            icon="alignCenter"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            hasClass={editor.isActive({ textAlign: "right" })}
            title="Align Right"
            icon="alignRight"
          />
        </div>

        <div className="flex gap-2 px-3">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            hasClass={editor.isActive("bulletList")}
            title="Bullet List"
            icon="list"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            hasClass={editor.isActive("blockquote")}
            title="Blockquote"
            icon="blockquote"
          />
          <ToolbarButton
            onClick={() =>
              editor
                ?.chain()
                .focus()
                .toggleSpanWrapper({ class: "label" })
                .run()
            }
            title="Transform text into labels"
            icon="tag"
          />
        </div>

        <div className="flex gap-2 px-3">
          {/* Add Columns Group */}
          <div className="relative z-10">
            <button
              onClick={toggleColumnsMenu}
              title="Add icon"
              className={`flex items-center justify-center h-8 min-w-8 px-2 rounded transition-all ${
                hasColumnsSelection
                  ? "bg-ginger-200 hover:bg-ginger-300"
                  : "bg-greige-100 hover:bg-peach-500"
              }`}
            >
              <LucideIcon name="columns" size={18} strokeWidth={2} />
              <LucideIcon name="chevronDown" size={12} strokeWidth={3} />
            </button>
            <div
              className={`absolute top-8 left-0 flex flex-col gap-1 p-2 bg-cream-50 rounded shadow-sm overflow-hidden transition-all ${
                showColumnsMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ToolbarButton
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .toggleDiv({ class: "editor-columns-2" })
                    .run();
                  setShowColumnsMenu(false);
                }}
                hasClass={editor.isActive("divWrapper", {
                  class: "editor-columns-2",
                })}
                title="2 Columns"
                icon="columns"
                showTitle
              />
              <ToolbarButton
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .toggleDiv({ class: "editor-columns-3" })
                    .run();
                  setShowColumnsMenu(false);
                }}
                hasClass={editor.isActive("divWrapper", {
                  class: "editor-columns-3",
                })}
                title="3 Columns"
                icon="columns3"
                showTitle
              />
            </div>
          </div>

          {/* Add Icon Group */}
          <div className="relative z-10">
            <button
              onClick={toggleIconMenu}
              title="Add icon"
              className={`flex items-center justify-center h-8 min-w-8 px-2 rounded transition-all ${
                hasIconSelection
                  ? "bg-ginger-200 hover:bg-ginger-300"
                  : "bg-greige-100 hover:bg-peach-500"
              }`}
            >
              <LucideIcon name="addEmoji" size={18} strokeWidth={2} />
              <LucideIcon name="chevronDown" size={12} strokeWidth={3} />
            </button>
            <div
              className={`absolute top-8 left-0 flex flex-col gap-1 p-2 bg-cream-50 rounded shadow-sm overflow-hidden transition-all ${
                showIconMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <RenderEmojis
                editor={editor!}
                onClose={() => setShowIconMenu(false)}
              />
            </div>
          </div>

          {/* Cover Block Group */}
          <div className="relative z-10">
            <button
              onClick={toggleCoverMenu}
              title="Change Width"
              className={`flex items-center justify-center h-8 min-w-8 px-2 rounded transition-all ${
                hasCoverSelection
                  ? "bg-ginger-200 hover:bg-ginger-300"
                  : "bg-greige-100 hover:bg-peach-500"
              }`}
            >
              <LucideIcon name="cover" size={18} strokeWidth={2} />
              <LucideIcon name="chevronDown" size={12} strokeWidth={3} />
            </button>
            <div
              className={`absolute top-8 left-0 flex flex-col gap-1 p-2 bg-cream-50 rounded shadow-sm overflow-hidden transition-all ${
                showCoverMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ToolbarButton
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .toggleDiv({ class: "cover-block" })
                    .run();
                }}
                hasClass={editor.isActive("divWrapper", {
                  class: "cover-block",
                })}
                title="Cover Block"
                icon="cover"
                showTitle
              />
              <ToolbarButton
                onClick={() => {
                  insertCardImage(editor, imageToInsert);
                  setShowCoverMenu(false);
                }}
                title="Cover Image"
                hasClass={false}
                icon="addImage"
                showTitle
              />
              <ToolbarButton
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .toggleDiv({ class: "cover-content" })
                    .run();
                  setShowCoverMenu(false);
                }}
                hasClass={editor.isActive("divWrapper", {
                  class: "cover-content",
                })}
                title="Cover Content"
                icon="text"
                showTitle
              />
            </div>
          </div>

          {/* Background color Group */}
          <div className="relative z-10">
            <button
              onClick={toggleBgFillMenu}
              title="Change Width"
              className={`flex items-center justify-center h-8 min-w-8 px-2 rounded transition-all ${
                hasBgFillSelection
                  ? "bg-ginger-200 hover:bg-ginger-300"
                  : "bg-greige-100 hover:bg-peach-500"
              }`}
            >
              <LucideIcon name="bgFill" size={18} strokeWidth={2} />
              <LucideIcon name="chevronDown" size={12} strokeWidth={3} />
            </button>
            <div
              className={`absolute top-8 left-0 flex flex-col gap-1 p-2 bg-cream-50 rounded shadow-sm overflow-hidden transition-all ${
                showBgFillMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ToolbarButton
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .toggleDiv({ class: "bg-darker" })
                    .run();
                  setShowBgFillMenu(false);
                }}
                hasClass={editor.isActive("divWrapper", {
                  class: "bg-darker",
                })}
                title="Bg Darker"
                showTitle
              />
              <ToolbarButton
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .toggleDiv({ class: "bg-lighter" })
                    .run();
                  setShowBgFillMenu(false);
                }}
                hasClass={editor.isActive("divWrapper", {
                  class: "bg-lighter",
                })}
                title="Bg Lighter"
                showTitle
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
