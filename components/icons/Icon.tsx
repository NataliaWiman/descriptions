import React from "react";
import Spinner from "./SpinnerIcon";
import Bold from "./BoldIcon";
import Italic from "./ItalicIcon";
import Underline from "./UnderlineIcon";
import List from "./ListIcon";
import Header1 from "./H1Icon";
import Header2 from "./H2Icon";
import Header3 from "./H3Icon";
import Edit from "./EditIcon";
import MajorArcana from "./MajorArcanaIcon";
import Cups from "./CupsIcon";
import Wands from "./WandsIcon";
import Swords from "./SwordsIcon";
import Pentacles from "./PentaclesIcon";
import Blockquote from "./BlockquoteIcon";
import AlignLeftIcon from "./AlignLeftIcon";
import AlignRightIcon from "./AlignRightIcon";
import AlignCenterIcon from "./AlignCenterIcon";
import Close from "./CloseIcon";
import Zoom from "./Zoom";
import Scroll from "./Scroll";
import Spreads from "./Spreads";
import Columns from "./Columns";
import Header4 from "./H4Icon";
import TextUp from "./TextUp";
import Placeholder from "./Placeholder";
import ImageAdd from "./ImageAdd";
import HeadingIcon from "./HIcon";
import ChevronDown from "./ChevronDown";
import Columns3 from "./Columns3";
import Columns4 from "./Columns4";
import Percent from "./Percent";
import Cover from "./Cover";
import TextSelect from "./TextSelect";
import ThumbUp from "./ThumbUp";
import ThumbDown from "./ThumbDown";
import AddEmoji from "./addEmoji";

export const icons = {
  spinner: Spinner,
  edit: Edit,
  bold: Bold,
  italic: Italic,
  underline: Underline,
  list: List,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h: HeadingIcon,
  blockquote: Blockquote,
  alignLeft: AlignLeftIcon,
  alignRight: AlignRightIcon,
  alignCenter: AlignCenterIcon,
  close: Close,
  zoom: Zoom,
  scroll: Scroll,
  spreads: Spreads,
  columns: Columns,
  columns3: Columns3,
  columns4: Columns4,
  percent: Percent,
  cover: Cover,
  textSelect: TextSelect,
  thumbUp: ThumbUp,
  thumbDown: ThumbDown,
  addEmoji: AddEmoji,

  textUp: TextUp,
  placeholder: Placeholder,
  addImage: ImageAdd,
  chevronDown: ChevronDown,

  "Major Arcana": MajorArcana,
  Cups: Cups,
  Wands: Wands,
  Swords: Swords,
  Pentacles: Pentacles,
};

const Icon = (props: {
  name: keyof typeof icons;
  className?: string;
  strokeWidth?: number;
}) => {
  const SelectedIcon = icons[props.name];
  if (!SelectedIcon) return null;

  return (
    <SelectedIcon
      className={props.className || "text-inherit"}
      strokeWidth={props.strokeWidth || 2}
    />
  );
};

export default Icon;
