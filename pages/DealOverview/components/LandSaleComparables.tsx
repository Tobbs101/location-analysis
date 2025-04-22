import React from "react";
import Image, { StaticImageData } from "next/image";
import Debaun from "@/assets/Debaun.png";
import Baylis from "@/assets/Baylis_Park.png";
import Edgeboro from "@/assets/Edgeboro.png";
import Terminal_Center from "@/assets/Terminal_Logistics.png";
import Each from "@/components/misc/Each";

type SaleItemProps = {
  id: number;
  image: StaticImageData;
  address: string;
  subMarket: string;
  deliveryDate: string;
  owner: string;
  sf: string;
};
const LandSaleComparables = () => {
  const saleItems: SaleItemProps[] = [
    {
      id: 1,
      image: Debaun,
      address: "640 Columbia",
      subMarket: "Brooklyn",
      deliveryDate: "Jun-25",
      owner: "CBREI",
      sf: "336,350",
    },
    {
      id: 2,
      image: Baylis,
      address: "WB Mason",
      subMarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
    },
    {
      id: 3,
      image: Edgeboro,
      address: "WB Mason",
      subMarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
    },
    {
      id: 4,
      image: Terminal_Center,
      address: "WB Mason",
      subMarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
    },
  ];

  return (
    <div className="">
      <h1 className="text-[24px] font-[600]">Sale Comparables</h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
        <Each
          of={saleItems}
          render={(item: SaleItemProps) => (
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

export default LandSaleComparables;
