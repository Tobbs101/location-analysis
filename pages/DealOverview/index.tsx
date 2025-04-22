import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import DealSummary from "./components/DealSummary";
import DealHeader from "./components/DealHeader";
import ProximityInsights from "./components/ProximityInsights";

const DealOverview = () => {
  return (
    <PageLayout title="Deal Overview">
      <DealHeader />
      <DealSummary />
      <ProximityInsights />
    </PageLayout>
  );
};

export default DealOverview;
