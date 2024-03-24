import CreateDonation from "../pages/dashboard/Create-Donation";
import Login from "../pages/login/Login";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <CreateDonation></CreateDonation>,
  },
  {
    name: "login",
    path: "login",
    element: <Login />,
  },
];
