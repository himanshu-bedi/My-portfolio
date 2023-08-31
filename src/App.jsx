import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Layout from './Layout/layout';

const App = () => {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/resume",
            element: <Resume />
          },
          
          {
            path: "/projects",
            element: <Projects />,
          },
        ]
      }
    ]
  );  

  return (
    <RouterProvider router={router} />
  )
}

export default App