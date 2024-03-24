import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./AllRoutes/AllRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
