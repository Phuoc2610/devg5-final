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
      <div className="mx-4">
        <h1 className="grid place-items-center text-4xl py-6">Dashboard</h1>
        <div className="grid grid-cols-4 gap-10">
          <UserDashboard />
          <UserDashboard />
          <UserDashboard />
          <UserDashboard />
          <SalesDashboard />
          <LeadsDashboard />
          <WebsiteTrafficDashboard />
        </div>
        {/* <TeamProgressDashboard />
          <RevenueDashboard /> */}
      </div>
    </>
  );
};

export default DashboardAdmin;
