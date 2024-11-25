import React from 'react'
import UserDashboard from '../../admin/dashboard/UserDashboard'
import SalesDashboard from '../../admin/dashboard/SalesDashboard'
import LeadsDashboard from '../../admin/dashboard/LeadsDashboard'
import TrafficDashboard from '../../admin/dashboard/TrafficDashboard'
import TeamProgressDashboard from '../../admin/dashboard/TeamProgressDashboard'

const DashboardStore = () => {
  return (
    <div>
      <UserDashboard />
      <SalesDashboard />
      <LeadsDashboard />
      <TrafficDashboard />
      <TeamProgressDashboard />
    </div>
  )
}

export default DashboardStore