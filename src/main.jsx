import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "@fontsource/outfit";
import "@fontsource/roboto";
import App from "./App.jsx";
import './index.css'

import About from './pages/About/About.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
