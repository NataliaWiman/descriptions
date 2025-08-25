import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    divWrapper: {
      setDiv: (attrs: { class: string }) => ReturnType;
      toggleDiv: (attrs: { class: string }) => ReturnType;
      unsetDiv: () => ReturnType;
    };
  }
}

export const DivWrapper = Node.create({
  name: "divWrapper",
  group: "block",
  content: "block+",
  defining: true,

  addAttributes() {
    return {
      class: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: "div" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes), 0];
  },

  addCommands() {
    const type = this.name;

    return {
      setDiv:
        (attrs) =>
        ({ commands }) =>
          commands.wrapIn(type, attrs),

      toggleDiv:
        (attrs) =>
        ({ commands }) =>
          commands.toggleWrap(type, attrs),

      unsetDiv:
        () =>
        ({ commands }) =>
          commands.lift(type),
    };
  },
});
