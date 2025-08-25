import { Paragraph } from "@tiptap/extension-paragraph";

export const ParagraphWithClass = Paragraph.extend({
  name: "paragraph",

  addAttributes() {
    return {
      ...this.parent?.(), // keep all existing attrs (nothing by default)
      class: {
        default: null,

        // Read the class back from existing HTML
        parseHTML: (element) => element.getAttribute("class"),

        // Put the class on the <p> tag when we render to HTML
        renderHTML: (attributes) => {
          const { class: className, ...rest } = attributes;
          // don’t render an empty class=""
          return className ? { ...rest, class: className } : rest;
        },
      },
    };
  },
});
