import React from "react";
import Dummy_Deal_Image from "@/assets/Dummy_Deal_Image.png";
import Image from "next/image";
import { DollarSign, Hammer, PersonStanding, Ruler, Scan } from "lucide-react";
import Each from "@/components/misc/Each";

type DealDataItemProps = {
  id: number;
  title: React.ReactNode;
  content: string;
};

const DealHeader = () => {
  const dealData: DealDataItemProps[] = [
    {
      id: 1,
      title: (
        <span className="flex items-center text-[#71717A] text-sm justify-center gap-1">
          <PersonStanding strokeWidth={2.5} className="w-[16px]" />
          Seller
        </span>
      ),
      content: "Thor Equities",
    },
    {
      id: 2,
      title: (
        <span className="flex items-center text-[#71717A] text-sm justify-center gap-1">
          <DollarSign strokeWidth={2.5} className="w-[16px]" />
          Guidance Price
        </span>
      ),
      content: "$143,000,000",
    },
    {
      id: 3,
      title: (
        <span className="flex items-center text-[#71717A] text-sm justify-center gap-1">
          <DollarSign strokeWidth={2.5} className="w-[16px]" />
          Guidance Price PSF
        </span>
      ),
      content: "$23.92",
    },
    {
      id: 4,
      title: (
        <span className="flex items-center text-[#71717A] text-sm justify-center gap-1">
          <Ruler strokeWidth={2.5} className="w-[16px]" />
          Cap Rate
        </span>
      ),
      content: "5.0%",
    },
    {
      id: 5,
      title: (
        <span className="flex items-center text-[#71717A] text-sm justify-center gap-1">
          <Ruler strokeWidth={2.5} className="w-[16px]" /> Property Size
        </span>
      ),
      content: "312,000 sqft",
    },
    {
      id: 6,
      title: (
        <span className="flex items-center text-[#71717A] text-sm justify-center gap-1">
          <Scan strokeWidth={2.5} className="w-[16px]" />
          Land Area
        </span>
      ),
      content: "16 acres",
    },
    {
      id: 7,
      title: (
        <span className="flex items-center text-[#71717A] text-sm justify-center gap-1">
          <Hammer strokeWidth={2.5} className="w-[16px]" />
          Zoning
        </span>
      ),
      content: "M-2",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-5 md:gap-10">
        <div className="h-full flex items-center justify-center flex-col gap-2">
          <div className="rounded-lg overflow-hidden">
            <Image src={Dummy_Deal_Image} alt="w-full h-full object-contain" />
          </div>
          <p className="text-xs hover:underline cursor-pointer">
            Click for Google Street View
          </p>
        </div>
        <div className="w-full flex items-center justify-between gap-5 flex-col">
          <div className="w-full flex items-center justify-between flex-wrap">
            <div>
              <p className="text-[20px] font-[600] mb-1">
                280 Richards, Brooklyn, NY
              </p>
              <p className="text-[14px] font-[400] text-[#71717A] mb-1">
                Date Uploaded: 11/06/2024
              </p>
              <p className="text-[14px] font-[400] text-[#71717A]">Warehouse</p>
            </div>
            <div className="flex items-center gap-3 justify-center flex-col">
              <button className="py-1 text-xs font-medium rounded-md px-5 text-white bg-black">
                Export to Excel
              </button>
              <button className="py-1 text-xs font-medium rounded-md px-1 text-white bg-black">
                Generate PowerPoint
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-start flex-wrap gap-2">
            <Each
              of={dealData}
              render={(item: DealDataItemProps) => (
                <div
                  key={item.id}
                  className="py-5 px-3 flex items-end justify-center w-full sm:w-[178px] flex-col gap-1"
                >
                  {item.title}{" "}
                  <p className="text-sm font-[400] text-center">
                    {item.content}
                  </p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div className="border-t border-[#E4E4E7] mt-9 h-[1px]" />
    </>
  );
};

export default DealHeader;
