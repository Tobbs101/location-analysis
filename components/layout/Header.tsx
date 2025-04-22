"use client";

import React from "react";
import Each from "../misc/Each";
import Logo from "@/assets/Icon.svg";
import Avatar from "@/assets/Avatar.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { formatRouteText } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const LINKS: { id: number; title: string | null; isActive: boolean }[] = [
    {
      id: 1,
      title: pathname === "/" ? "New Upload" : formatRouteText(pathname || ""),
      isActive: true,
    },
    { id: 2, title: "Pipeline", isActive: false },
    { id: 3, title: "Settings", isActive: false },
  ];

  const LogoComponent = () => {
    return (
      <Image
        className="h-[40px] w-[80px]"
        src={Logo}
        alt="logo"
        width={250}
        height={250}
      />
    );
  };

  const handleReturn = () => {
    router.back();
  };

  return (
    <>
      {pathname !== "/" && (
        <div className="w-full py-2 flex items-center justify-between">
          <button onClick={handleReturn}>
            <ArrowLeft />
          </button>

          <div className="md:hidden block">
            <LogoComponent />
          </div>
        </div>
      )}
      <div className="py-5 w-full flex items-start md:items-center flex-wrap justify-between gap-5">
        <ul className="flex items-center justify-start gap-7">
          <Each
            of={LINKS}
            render={(item) => (
              <li
                key={item.id}
                className={`text-[14px] py-2 ${
                  item.isActive
                    ? "font-[600] text-black"
                    : "text-gray-500 font-[500] cursor-not-allowed"
                }`}
              >
                {item.title}
              </li>
            )}
          />
        </ul>
        <div className="flex items-center justify-center gap-3">
          <Image
            className="w-[40px] h-[40px] rounded-full"
            src={Avatar}
            alt="avatar"
            width={250}
            height={250}
          />
          <input
            className="border border-gray-200 h-[40px] w-full focus:border-black focus:ring-0 outline-none rounded-tl-2xl rounded-tr-lg rounded-br-lg px-2 placeholder:text-sm md:w-[350px] shadow"
            placeholder="Ask me anything!"
          />
        </div>
        <div className="md:block hidden">
          <LogoComponent />
        </div>
      </div>
    </>
  );
};

export default Header;
