import React from "react";

interface StyledTextProps {
  text: string;
}

const StyledText = ({ text }: StyledTextProps) => {
  const styledText = text.replace(
    /\b(of \w+|Ace|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Page|Knight|Queen|King)\b/g,
    (match) => {
      if (match.startsWith("of ")) {
        return `<span>${match}</span>`;
      }
      return `<span class="font-bold">${match}</span>`;
    }
  );

  return (
    <h6
      className="text-base"
      dangerouslySetInnerHTML={{ __html: styledText }}
    />
  );
};

export default StyledText;
