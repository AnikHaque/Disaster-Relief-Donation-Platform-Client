import React from "react";
import { NavLink } from "react-router-dom";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";

// Replace with your actual route paths or import them from a separate file
const userPaths = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/create-donation", name: "Create Donation" },
];

const Sidebar = () => {
  const sidebarItems = sidebarItemsGenerator(userPaths); // Generate sidebar items

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-4xl font-bold">PH Uni</h1>
      </div>
      <nav className="mt-4">
        <ul className="space-y-4">
          {sidebarItems.map((item) => (
            <li key={item.key}>
              <NavLink
                className="block py-2 px-4 hover:bg-gray-700"
                to={item.label.href}
              >
                {item.label.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
