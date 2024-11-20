import React from "react";
import LeadsDashboard from "./LeadsDashboard";
import SalesDashboard from "./SalesDashboard";
import UserDashboard from "./UserDashboard";
import TeamProgressDashboard from "./TeamProgressDashboard";
import RevenueDashboard from "./RevenueDashboard";
import WebsiteTrafficDashboard from "./WebsiteTrafficDashboard";

const DashboardAdmin = () => {
  return (
    <>
      <div className="flex justify-evenly mb-4">
        <LeadsDashboard />
        <SalesDashboard />
        <UserDashboard />
      </div>
      <div className="flex justify-evenly">
        <WebsiteTrafficDashboard />
        <TeamProgressDashboard />
        <RevenueDashboard />
      </div>
    </>
  );
};

export default DashboardAdmin;
