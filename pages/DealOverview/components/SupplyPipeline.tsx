import React from "react";
import Columbia from "@/assets/Columbia.png";
import Mason from "@/assets/Mason.png";
import Each from "@/components/misc/Each";
import Image, { StaticImageData } from "next/image";

type PipelineItemProps = {
  id: number;
  image: StaticImageData;
  address: string;
  subMarket: string;
  deliveryDate: string;
  owner: string;
  sf: string;
};

const SupplyPipeline = () => {
  const pipelines: PipelineItemProps[] = [
    {
      id: 1,
      image: Columbia,
      address: "640 Columbia",
      subMarket: "Brooklyn",
      deliveryDate: "Jun-25",
      owner: "CBREI",
      sf: "336,350",
    },
    {
      id: 2,
      image: Mason,
      address: "WB Mason",
      subMarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
    },
  ];
  return (
    <div className="border-r border-[#E4E4E7]">
      <h1 className="text-[24px] font-[600]">Supply Pipeline</h1>
      <div className="mt-5 ">
        <Each
          of={pipelines}
          render={(item: PipelineItemProps) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-7 gap-2"
            >
              <div className="h-[140px] flex-[2.5] rounded-lg w-[350px] overflow-hidden">
                <Image
                  src={item.image}
                  className="h-[200px] w-[350px]"
                  alt="Pipeline Image"
                />
              </div>
              <div className="flex-[3]">
                <p className="text-black mb-1">
                  <span className="font-[700]">Address:</span> {item.address}
                </p>
                <p className="text-[#71717A] mb-1">
                  <span className="font-[700] text-black">Submarket:</span>{" "}
                  {item.subMarket}
                </p>
                <p className="text-[#71717A] mb-1">
                  <span className="font-[700] text-black">Delivery Date:</span>{" "}
                  {item.deliveryDate}
                </p>
                <p className="text-[#71717A] mb-1">
                  <span className="font-[700] text-black">Owner:</span>{" "}
                  {item.owner}
                </p>
                <p className="text-[#71717A]">
                  <span className="font-[700] text-black">SF:</span> {item.sf}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default SupplyPipeline;
