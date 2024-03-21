import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import AuthProvider from './providers/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);


