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
      <div className="w-[95%] mx-auto">
        <h1 className="grid place-items-center text-4xl my-4">Dashboard</h1>
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
      </div>
    </>
  );
};

export default DashboardAdmin;
