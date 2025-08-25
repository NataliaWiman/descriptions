import React from "react";
import Link from "next/link";
import Icon from "./icons/Icon";

const Nav = () => {
  const navLinks: {
    title: string;
    slug: string;
    icon: "scroll" | "spreads";
  }[] = [
    {
      title: "Spreads",
      slug: "spreads",
      icon: "spreads",
    },
    {
      title: "Descriptions",
      slug: "",
      icon: "scroll",
    },
  ];

  const renderLink = (link: {
    title: string;
    slug: string;
    icon: "scroll" | "spreads";
  }) => {
    return (
      <Link
        href={`/${link.slug}`}
        className="flex p-2 rounded-md hover:bg-peach-500 transition-colors"
      >
        <Icon name={link.icon} className="w-5 h-5 text-peach-900" />
        <span className="hidden">{link.title}</span>
      </Link>
    );
  };
  return (
    <nav className="fixed lg:top-0 max-lg:bottom-0 left-0 w-full lg:w-12 lg:h-screen bg-peach-400 z-50">
      <ul className="flex lg:flex-col justify-center items-center gap-2 w-full h-full py-2">
        {navLinks.map((link, index) => (
          <li key={index}>{renderLink(link)}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
