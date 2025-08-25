import { InnerRenderView } from "@/utils/inner-render";
import { Node, mergeAttributes, Command } from "@tiptap/core";

export interface LucideIconOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    lucideIcon: {
      setLucideIcon: (name: string, size: number, stroke: number) => ReturnType;
    };
  }
}

export const LucideIconExtension = Node.create<LucideIconOptions>({
  name: "lucideIcon",
  inline: true,
  group: "inline",
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      name: {
        default: "",
      },
      size: {
        default: 20,
      },
      stroke: {
        default: 2,
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
        tag: `small[data-type="${this.name}"]`,
        getAttrs: (node) => ({
          name: (node as HTMLElement).dataset.name,
          size: parseInt(
            (node as HTMLElement).getAttribute("size") ?? "20",
            10
          ),
          stroke: parseInt(
            (node as HTMLElement).getAttribute("stroke") ?? "2",
            10
          ),
        }),
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    const { name, size, stroke } = node.attrs;
    return [
      "small",
      mergeAttributes(
        {
          "data-type": this.name,
          "data-name": name,
          size,
          stroke,
        },
        this.options.HTMLAttributes,
        HTMLAttributes
      ),
    ];
  },

  addNodeView() {
    return InnerRenderView.create({
      tag: "small",
      onInit: ({ view }) => {
        console.log("Lucide NodeView created for", view.node.attrs.name);
      },
      HTMLAttributes: this.options.HTMLAttributes,
      onRender: ({ view }) => {
        const { name, size, stroke } = view.node.attrs;
        console.log("does this run");
        import("react-dom/client").then((ReactDOM) => {
          import("../Icon").then(({ default: LucideIcon }) => {
            ReactDOM.createRoot(view.$root).render(
              <LucideIcon name={name} size={size} strokeWidth={stroke} />
            );
          });
        });
      },
    });
  },

  addCommands() {
    return {
      setLucideIcon:
        (name: string, size: number, stroke: number): Command =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { name, size, stroke },
          });
        },
    };
  },
});
