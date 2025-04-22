import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import DealSummary from "./components/DealSummary";
import DealHeader from "./components/DealHeader";
import ProximityInsights from "./components/ProximityInsights";
import SupplyPipeline from "./components/SupplyPipeline";
import LandSaleComparables from "./components/LandSaleComparables";

const DealOverview = () => {
  return (
    <PageLayout title="Deal Overview">
      <DealHeader />
      <DealSummary />
      <ProximityInsights />
      <div className="mt-9 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-5 pb-5">
        <SupplyPipeline />
        <LandSaleComparables />
      </div>
    </PageLayout>
  );
};

export default DealOverview;
