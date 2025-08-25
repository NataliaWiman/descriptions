import LucideIcon, { icons } from "../Icon";

type ToolbarButtonTypes = {
  onClick: () => void;
  hasClass?: boolean;
  title: string;
  showTitle?: boolean;
  icon?: keyof typeof icons;
  iconSize?: number;
  strokeWidth?: number;
};

const ToolbarButton = ({
  onClick,
  hasClass,
  title,
  showTitle,
  icon,
  iconSize,
  strokeWidth,
}: ToolbarButtonTypes) => {
  return (
    <button
      onClick={() => onClick()}
      className={`flex items-center gap-2 justify-center min-h-8 min-w-8 px-2 py-1 rounded transition-all ${
        hasClass
          ? "bg-ginger-200 hover:bg-ginger-300"
          : "bg-greige-100 hover:bg-peach-500"
      }`}
      title={title}
    >
      <LucideIcon
        name={icon}
        size={iconSize ?? 18}
        strokeWidth={strokeWidth ?? 2}
        color="#7f4323"
      />

      {showTitle && (
        <span className="flex mr-auto font-primary font-semibold whitespace-nowrap">
          {title}
        </span>
      )}
    </button>
  );
};

export default ToolbarButton;
