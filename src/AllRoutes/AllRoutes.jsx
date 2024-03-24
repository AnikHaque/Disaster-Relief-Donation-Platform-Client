import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Test from "../pages/dashboard/Test";
import CreateDonation from "../pages/dashboard/Create-Donation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "test",
        element: <Test></Test>,
      },
      {
        path: "create-donation",
        element: <CreateDonation></CreateDonation>,
      },
    ],
  },
]);
