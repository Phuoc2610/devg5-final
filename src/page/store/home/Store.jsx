import React from 'react'
import SidebarStore from '../../../components/sidebar/SidebarStore';
import { Outlet } from 'react-router-dom';

const Store = () => {
  return (
    <div className="md:flex bg-gray-900">
      <SidebarStore />
      <div className="md:flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Store