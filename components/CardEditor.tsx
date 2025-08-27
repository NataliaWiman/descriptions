"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import BulletList from "@tiptap/extension-bullet-list";
import Toolbar from "./Toolbar";
import Icon from "./icons/Icon";
import Blockquote from "@tiptap/extension-blockquote";
import React from "react";
import TextStyle from "@tiptap/extension-text-style";
import CodeBlock from "@tiptap/extension-code-block";
import Strike from "@tiptap/extension-strike";
import { ParagraphWithClass } from "./ParagraphWithClass";
import { Image } from "@tiptap/extension-image";
import { SpanWrapper } from "./extensions/SpanWrapper";
import { DivWrapper } from "./extensions/DivWrapper";
import { LucideIconExtension } from "./extensions/LucideIconExtension";
import { LabelGroupExtension } from "./extensions/LabelGroupExtension";

interface CardEditorProps {
  cardId: string;
  initialContent: string;
  title: string;
  suit: string;
}

const CardEditor = ({ cardId, initialContent, title }: CardEditorProps) => {
  const [content, setContent] = useState<string>(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const isDevMode = Boolean(process.env.NEXT_PUBLIC_MODE === "dev");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ paragraph: false }),
      Bold,
      Italic,
      Strike,
      Underline,
      BulletList,
      Blockquote,
      TextStyle,
      CodeBlock,
      ParagraphWithClass,
      LucideIconExtension,
      SpanWrapper,
      DivWrapper,
      LabelGroupExtension,
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3, 4],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
    ],
    content: initialContent,
    immediatelyRender: false,
    onUpdate: ({ editor: instance }) => {
      setContent(instance.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const cardRef = doc(db, "tarotCards", cardId);
      await updateDoc(cardRef, { description: content });

      setIsSaving(false);
      setIsEditable(false);
    } catch (error) {
      console.error("Error updating description:", error);
      setIsSaving(false);
    }
  };

  if (!editor) return null;
  if (!cardId) return null;

  return (
    <section className="card relative grid items-start w-full max-lg:max-w-screen">
      <div className="relative">
        {isDevMode && (
          <header
            className={`sticky right-0 flex z-20 transition-all ${
              isEditable ? "top-0 h-auto bg-peach-100" : "top-3 h-0"
            }`}
          >
            {isEditable && (
              <div className="flex items-center px-4 py-2 bg-peach-100 rounded-tl-2xl">
                <Toolbar editor={editor} isVisible={isEditable} />
              </div>
            )}

            <div className={`flex flex-row-reverse w-full`}>
              <div className="flex max-lg:flex-col items-center gap-2">
                {isEditable && (
                  <button
                    aria-label="Save"
                    onClick={handleSave}
                    className={`flex justify-center items-center h-8 px-4 font-bold text-sm text-peach-100 rounded-xl bg-ginger-450 hover:bg-ginger-500 transition-all ${
                      isSaving ? "opacity-50" : ""
                    }`}
                  >
                    {isSaving ? (
                      <Icon
                        name="spinner"
                        className="w-4 h-4 text-fern-300 fill-peach-100"
                      />
                    ) : (
                      <span>Save</span>
                    )}
                  </button>
                )}

                <label
                  className={`flex items-center justify-center h-8 font-bold text-sm rounded-xl cursor-pointer transition-all z-30 ${
                    isEditable
                      ? "px-4 text-coffee-800 bg-peach-400 hover:bg-peach-500"
                      : "w-8 h-8 py-2 text-coffee-800 bg-peach-400 hover:bg-peach-500 shadow-sm shadow-coffee-800/30"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isEditable}
                    onChange={() => setIsEditable(!isEditable)}
                    className="absolute top-0 left-0 opacity-0 invisible"
                  />
                  {isEditable ? (
                    <span className="">Cancel</span>
                  ) : (
                    <Icon
                      name="edit"
                      className="w-4 lg:w-5 h-4 lg:h-5 pointer-events-none"
                    />
                  )}
                </label>
              </div>
            </div>
          </header>
        )}

        <div className="lg:hidden sticky top-0 w-full pt-0.5 pb-1.5 bg-peach-400 z-10">
          <h1 className="font-bold text-ginger-600 text-2xl text-center">
            {title}
          </h1>
        </div>

        <EditorContent
          editor={editor}
          className={`editor md:mb-8 pb-10 transition-all`}
        />
      </div>
    </section>
  );
};

export default CardEditor;
