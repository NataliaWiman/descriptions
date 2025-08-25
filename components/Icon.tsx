import React from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  CircleQuestionMark,
  Columns2,
  Columns3,
  Frown,
  Handshake,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heart,
  HeartHandshake,
  ImagePlus,
  Italic,
  Key,
  LifeBuoy,
  List,
  MessageSquareQuote,
  PaintBucket,
  Percent,
  PersonStanding,
  Smile,
  SmilePlus,
  SquareMenu,
  Strikethrough,
  Tag,
  ThumbsDown,
  ThumbsUp,
  Underline,
  WalletMinimal,
  Wallpaper,
} from "lucide-react";

export const icons = {
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strike: Strikethrough,

  h: Heading,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,

  alignLeft: AlignLeft,
  alignRight: AlignRight,
  alignCenter: AlignCenter,

  addEmoji: SmilePlus,
  addImage: ImagePlus,
  bgFill: PaintBucket,
  blockquote: MessageSquareQuote,
  chevronDown: ChevronDown,
  circleQuestionMark: CircleQuestionMark,
  columns: Columns2,
  columns3: Columns3,
  cover: Wallpaper,
  frown: Frown,
  handshake: Handshake,
  heart: Heart,
  heartHandshake: HeartHandshake,
  key: Key,
  lifeBuoy: LifeBuoy,
  list: List,
  percent: Percent,
  personStanding: PersonStanding,
  smile: Smile,
  tag: Tag,
  text: SquareMenu,
  thumbDown: ThumbsDown,
  thumbUp: ThumbsUp,
  walletMinimal: WalletMinimal,
};

const LucideIcon = (props: {
  name?: keyof typeof icons | undefined;
  color?: string;
  size?: number;
  strokeWidth?: number;
}) => {
  if (!props.name) return null;
  const SelectedIcon = icons[props.name];
  if (!SelectedIcon) return null;

  return (
    <SelectedIcon
      color={props.color ?? "currentColor"}
      size={props.size ?? 24}
      strokeWidth={props.strokeWidth ?? 2}
    />
  );
};

export default LucideIcon;
