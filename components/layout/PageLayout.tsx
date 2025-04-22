import React, { ReactNode } from "react";
import Header from "./Header";
import { ChevronDown } from "lucide-react";

const PageLayout = ({
  children,
  title = "New Page",
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <main className="w-full p-10 bg-white min-h-screen text-black">
      <Header />
      <div className="text-black py-7 flex items-center justify-between">
        <p className="text-[24px] font-semibold">{title}</p>
        <div className="flex items-center justify-center flex-col">
          <p className="text-[18px] font-[500]">Underwriting Model</p>
          <span className="mt-2 text-[14px] font-medium border border-[#F4F4F5CC] bg-[#F4F4F5CC] px-4 py-2 flex items-center justify-center gap-1">
            Industrial.Template.v2.4.xlsx
            <ChevronDown className="w-[16px]" />
          </span>
        </div>
      </div>
      <div className="border-t border-[#E4E4E7] mb-9 h-[1px]" />
      <div className="min-h-[calc(100vh-350px)]">{children}</div>
    </main>
  );
};

export default PageLayout;
