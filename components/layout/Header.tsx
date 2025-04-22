import React from "react";
import Each from "../misc/Each";
import Logo from "@/assets/Icon.svg";
import Image from "next/image";

const LINKS: { id: number; title: string; isActive: boolean }[] = [
  { id: 1, title: "New Upload", isActive: true },
  { id: 2, title: "Pipeline", isActive: false },
  { id: 3, title: "Settings", isActive: false },
];

const Header = () => {
  return (
    <div className="py-5 w-full flex items-center justify-between">
      <ul className="flex items-center justify-start gap-7">
        <Each
          of={LINKS}
          render={(item) => (
            <li
              key={item.id}
              className={`text-[14px] cursor-pointer py-2 ${
                item.isActive
                  ? "font-[600] text-black"
                  : "text-gray-500 font-[500]"
              }`}
            >
              {item.title}
            </li>
          )}
        />
      </ul>
      <Image
        className="h-[40px] w-[80px]"
        src={Logo}
        alt="logo"
        width={250}
        height={250}
      />
    </div>
  );
};

export default Header;
