import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Test from "../../pages/dashboard/Test";

export const Drouter = createBrowserRouter([
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "test",
        element: <Test></Test>,
      },
    ],
  },
]);
