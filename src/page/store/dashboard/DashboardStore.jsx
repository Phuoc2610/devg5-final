import React from 'react'
import UserDashboard from '../../../components/dashboard/UserDashboard'
import SalesDashboard from '../../../components/dashboard/SalesDashboard'
import LeadsDashboard from '../../../components/dashboard/LeadsDashboard'
import TrafficDashboard from '../../../components/dashboard/TrafficDashboard'
import TeamProgressDashboard from '../../../components/dashboard/TeamProgressDashboard'

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