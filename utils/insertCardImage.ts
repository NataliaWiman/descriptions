import { Editor } from "@tiptap/core";

export function insertCardImage(editor: Editor, image: string | null) {
  /* let filename = null;
  if (!image) {
    filename = prompt("Enter the card filename, e.g. 10_of_swords.png");
    if (!filename) return;
  } */

  editor
    .chain()
    .focus()
    .setBlockquote()
    .setImage({
      src: `/cards/${image ? image : "placeholder"}.png`,
      alt: (image ? image : "placeholder")
        .replace(/[_-]/g, " ")
        .replace(/\.\w+$/, ""),
    })
    .run();
}
