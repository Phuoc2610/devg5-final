import React from "react";
import SidebarAdmin from "../sidebar/SidebarAdmin";
import { Outlet } from 'react-router-dom';
const Admin = () => {
    return (
        <div className="flex bg-gray-200 h-screen">
            <SidebarAdmin />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
