import { Mark, mergeAttributes } from "@tiptap/core";

export interface SpanWrapperOptions {
  HTMLAttributes: Record<string, unknown>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    spanWrapper: {
      setSpanWrapper: (attributes?: { class: string }) => ReturnType;
      toggleSpanWrapper: (attributes?: { class: string }) => ReturnType;
      unsetSpanWrapper: () => ReturnType;
    };
  }
}

export const SpanWrapper = Mark.create<SpanWrapperOptions>({
  name: "spanWrapper",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      class: { default: null },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      setSpanWrapper:
        (attributes) =>
        ({ commands }) => {
          return commands.setMark(this.name, attributes);
        },
      toggleSpanWrapper:
        (attributes) =>
        ({ commands }) => {
          return commands.toggleMark(this.name, attributes);
        },
      unsetSpanWrapper:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});
