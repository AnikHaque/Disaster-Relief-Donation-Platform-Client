import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Test from "../pages/dashboard/Test";
import CreateDonation from "../pages/dashboard/Create-Donation";
import Donation from "../pages/Donation/Donation";
import CreateTestimonial from "../pages/dashboard/Create-Testimonial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-donation",
        element: <Donation></Donation>,
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
      {
        path: "create-testimonial",
        element: <CreateTestimonial></CreateTestimonial>,
      },
    ],
  },
]);
