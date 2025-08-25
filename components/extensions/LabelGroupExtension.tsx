import { Node, mergeAttributes, Command } from "@tiptap/core";
import { InnerRenderView } from "@/utils/inner-render";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    labelGroup: {
      setLabelGroup: (color?: "light" | "dark") => ReturnType;
    };
  }
}

export const LabelGroupExtension = Node.create({
  name: "labelGroup",
  group: "block",
  content: "text*",
  defining: false,
  allowGapCursor: true,
  selectable: true,

  addAttributes() {
    return {
      color: {
        default: "light",
      },
    };
  },

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  parseHTML() {
    return [
      {
        tag: `aside[data-type="labelGroup"]`,
        getAttrs: (node) => ({
          class: (node as HTMLElement).getAttribute("class") ?? "light",
          color: (node as HTMLElement).getAttribute("data-color") ?? "light",
        }),
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "aside",
      mergeAttributes(
        {
          "data-type": "labelGroup",
          "data-color": node.attrs.color,
        },
        HTMLAttributes
      ),
      0,
    ];
  },

  addNodeView() {
    return InnerRenderView.create({
      tag: "aside",
      onRender: ({ view }) => {
        const color = view.node.attrs.color;
        view.$root.setAttribute("data-color", color);

        const text = view.node.textContent ?? "";

        // Split commas for visual render
        view.$root.innerHTML = "";

        const editable = document.createElement("div");
        editable.contentEditable = "true";
        editable.className = "label-group";

        const labels = text.split(",").map((s) => s.trim());
        editable.innerHTML = labels
          .map((word) => `<span class="label">${word}</span>`)
          .join("");

        view.$root.appendChild(editable);
      },
    });
  },

  addCommands() {
    return {
      setLabelGroup:
        (color = "light"): Command =>
        ({ tr, state, dispatch }) => {
          const { $from } = state.selection;
          const parentPos = $from.before();
          const parentNode = $from.node();

          if (!parentNode.isTextblock) return false;

          const text = parentNode.textContent;

          const node = state.schema.nodes.labelGroup.create(
            { color },
            state.schema.text(text)
          );

          tr.replaceWith(parentPos, parentPos + parentNode.nodeSize, node);

          if (dispatch) dispatch(tr);
          return true;
        },
    };
  },
});
