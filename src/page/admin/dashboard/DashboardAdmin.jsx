import React from "react";
import LeadsDashboard from "./LeadsDashboard";
import SalesDashboard from "./SalesDashboard";
import UserDashboard from "./UserDashboard";


const DashboardAdmin = () => {
  return (
    <>
      <div className="mx-4">
        <h1 className="grid place-items-center text-4xl py-4">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <UserDashboard />
          <UserDashboard />
          <SalesDashboard />
          <LeadsDashboard />
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
