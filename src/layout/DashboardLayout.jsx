import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-accent">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/test">Create Test</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/testt">Create Testtttt</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/create-donation">Create Donation</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
