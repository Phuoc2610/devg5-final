import React from 'react'
import NavbarStore from '../navbar/NavbarStore'
import { Outlet } from 'react-router-dom';

const Store = () => {
  return (
    <div className="">
      <NavbarStore />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Store