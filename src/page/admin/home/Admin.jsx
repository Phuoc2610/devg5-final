import React from "react";
import SidebarAdmin from "../sidebar/SidebarAdmin";
import { Outlet } from 'react-router-dom';
const Admin = () => {
    return (
        <div className="flex">
            <SidebarAdmin />
            {/* Main Content */}
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
