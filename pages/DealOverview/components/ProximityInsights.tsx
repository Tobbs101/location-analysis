import React from "react";
import {
  LucideIcon,
  Banknote,
  ChartBar,
  ChartPie,
  Tags,
  Percent,
  ChartLine,
  Clock9,
  PiggyBank,
  Network,
  Clock5,
  ArrowUp,
} from "lucide-react";
import Each from "@/components/misc/Each";

type ItemProps = {
  id: number;
  title: React.ReactNode;
  value: string;
  icon: LucideIcon;
};

const ProximityInsights = () => {
  const projectedMetrics: ItemProps[] = [
    { id: 1, title: "IRR", value: "13.9%", icon: Banknote },
    { id: 2, title: "Equity Multiple", value: "2.3x", icon: ChartBar },
    {
      id: 3,
      title: "Return on Equity",
      value: "18.5%",
      icon: ChartPie,
    },
    {
      id: 4,
      title: "Return on Cost",
      value: "19.2%",
      icon: Banknote,
    },
  ];

  const keyAssumptions: ItemProps[] = [
    { id: 1, title: "Exit Price", value: "$195M", icon: Tags },
    { id: 2, title: "Exit Cap Rate", value: "5.0%", icon: Percent },
    {
      id: 3,
      title: "Rental Growth",
      value: "3.5%",
      icon: ChartLine,
    },
    {
      id: 4,
      title: "Hold Period",
      value: "16 Years",
      icon: Clock9,
    },
  ];

  const marketAnalysis: ItemProps[] = [
    {
      id: 1,
      title: "Nearest Urban Center",
      value: "Brooklyn, NY",
      icon: Banknote,
    },
    { id: 2, title: "Population Growth Rate", value: "1.2%", icon: ChartBar },
    {
      id: 3,
      title: "Median Household Income",
      value: "$76,912",
      icon: PiggyBank,
    },
    {
      id: 4,
      title: "Unemployment Rate",
      value: "7.4%",
      icon: Network,
    },
  ];

  const leaseAnalysis: ItemProps[] = [
    { id: 1, title: "Rent PSF", value: "$24.40", icon: Banknote },
    {
      id: 2,
      title: "Remaining Lease Term",
      value: "13 Yrs (Sep 37)",
      icon: Clock5,
    },
    {
      id: 3,
      title: "Return on Equity",
      value: "3%",
      icon: ArrowUp,
    },
    {
      id: 4,
      title: "Mark-to-Market Opportunity",
      value: "30%+",
      icon: ChartLine,
    },
  ];

  return (
    <>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-r border-transparent md:border-[#E4E4E7]">
          <h1 className="text-[16px] text-center mb-1 font-[500] text-[#71717A]">
            Projected Financial Metrics
          </h1>
          <Each
            of={projectedMetrics}
            render={(item: ItemProps) => (
              <div key={item.id}>
                <div className="py-4 px-3 flex items-center justify-start w-full sm:w-[200px] gap-3">
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
        <div className="border-r border-transparent lg:border-[#E4E4E7]">
          <h1 className="text-[16px] text-center mb-1 font-[500] text-[#71717A]">
            Key Assumptions
          </h1>
          <Each
            of={keyAssumptions}
            render={(item: ItemProps) => (
              <div key={item.id}>
                <div className="py-4 px-3 flex items-center justify-start w-full sm:w-[200px] gap-3">
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
        <div className="border-r border-transparent md:border-[#E4E4E7]">
          <h1 className="text-[16px] text-center mb-1 font-[500] text-[#71717A]">
            Market Analysis
          </h1>
          <Each
            of={marketAnalysis}
            render={(item: ItemProps) => (
              <div key={item.id} className="w-full">
                <div className="py-4 px-3 flex items-center justify-start w-full sm:max-w-[300px] gap-3">
                  <item.icon strokeWidth={2} className="w-[24px]" />
                  <div className="w-full">
                    <p className="text-[12px] text-left font-[500] text-[#71717A]">
                      {item.title}
                    </p>
                    <p className="text-[24px] w-full font-[600] text-left">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
        <div className="">
          <h1 className="text-[16px] text-center mb-1 font-[500] text-[#71717A]">
            Lease Analysis
          </h1>
          <Each
            of={leaseAnalysis}
            render={(item: ItemProps) => (
              <div key={item.id} className="w-full">
                <div className="py-4 px-3 flex items-center justify-start w-full sm:max-w-[300px] gap-3">
                  <item.icon strokeWidth={2} className="w-[24px]" />
                  <div className="w-full">
                    <p className="text-[12px] text-left font-[500] text-[#71717A]">
                      {item.title}
                    </p>
                    <p className="text-[24px] w-full font-[600] text-left">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="border-t border-[#E4E4E7] mt-9 h-[1px]" />
    </>
  );
};

export default ProximityInsights;
