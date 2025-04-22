import React from "react";
import {
  LucideIcon,
  Building,
  PersonStanding,
  Waves,
  House,
  Truck,
  Car,
  Timer,
  FlipVertical2,
} from "lucide-react";
import Each from "@/components/misc/Each";

type AssetDataItemProps = {
  id: number;
  title: React.ReactNode;
  value: string;
  icon: LucideIcon;
};

const DealSummary = () => {
  const assetData: AssetDataItemProps[] = [
    { id: 1, title: "Clear Heights", value: "36'", icon: Building },
    { id: 2, title: "Tenant", value: "Amazon", icon: PersonStanding },
    {
      id: 3,
      title: "Column Spacing",
      value: "63' X 54'",
      icon: FlipVertical2,
    },
    {
      id: 4,
      title: "Seaward Area",
      value: "357,151 sqft",
      icon: Waves,
    },
    { id: 5, title: "Parking Spaces", value: "393", icon: Car },
    { id: 6, title: "Year Built", value: "2021", icon: Timer },
    { id: 7, title: "# of Dock Doors", value: "28", icon: Truck },
    { id: 8, title: "Occupancy Rate", value: "100%", icon: House },
  ];
  return (
    <>
      <div className="flex w-full items-start justify-between mt-9 gap-5 flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className="text-[16px] font-[500] text-[#71717A] mb-[5px]">
            Deal Summary
          </h1>
          <p className="text-[14px] font-[400]">
            280 Richards, fully leased to Amazon, aligns with HUSPP’s strategy
            of acquiring prime logistics assets in Brooklyn’s high-demand Red
            Hook submarket. With 13 years remaining on the lease and 3% annual
            rent escalations, it offers stable, long-term cash flow. While
            single-tenant exposure is a risk, Amazon’s investment-grade rating
            and renewal options enhance its resilience, making it a strong
            addition to HUSPP’s portfolio.
          </p>
          <h1 className="text-[16px] font-[500] text-[#71717A] mt-[30px] mb-[5px]">
            Personalized Insights
          </h1>
          <ul className="list-disc pl-5 space-y-2 text-[14px] font-[400]">
            <li>
              Jake Klein viewed this deal in 2019 but decided not to proceed due
              to{" "}
              <span className="underline text-[#1400ee]">
                lack of potential upside
              </span>
              .
            </li>
            <li>
              On 10/19/2021, your firm bid on{" "}
              <span className="underline text-[#1400ee]">
                55 Bay St, Brooklyn, NY 11231
              </span>
              , a larger site also occupied by Amazon 0.5 miles away.{" "}
              <span className="underline text-[#1400ee]">
                Brookfield won the deal for $45M
              </span>
              , cap rates in the area have compressed 45bps since then.
            </li>
            <li>
              On 01/19/2025, Tom, VP of Research, noted in the Investment
              Committee meeting that congestion pricing has driven{" "}
              <span className="underline text-[#1400ee]">
                renewed demand for infill industrial in Brooklyn
              </span>
              .
            </li>
          </ul>
        </div>
        <div className="w-full border-l border-transparent lg:border-[#E4E4E7] flex-1 flex items-center justify-center flex-col gap-5">
          <h1 className="text-[16px] font-[500] text-[#71717A]">
            Asset-Level Data
          </h1>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
            <Each
              of={assetData}
              render={(item: AssetDataItemProps) => (
                <div key={item.id} className="">
                  <div className="py-2 px-3 flex items-center justify-start w-full sm:w-[200px] gap-3">
                    <item.icon strokeWidth={2} className="w-[24px]" />
                    <div>
                      <p className="text-[12px] text-left font-[500] text-[#71717A]">
                        {item.title}
                      </p>
                      <p className="text-[24px] font-[600] text-left">
                        {item.value}
                      </p>
                    </div>
                  </div>
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

export default DealSummary;
