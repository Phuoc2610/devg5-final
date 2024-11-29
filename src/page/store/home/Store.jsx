import React from 'react'
import NavbarStore from '../../../components/navbar/NavbarStore'
import { Outlet } from 'react-router-dom';

const Store = () => {
  return (
    <div className="bg-gray-900 ">
      <NavbarStore />
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Store