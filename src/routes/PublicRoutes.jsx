import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Details from "../pages/shared/Details";
import Login from "../Authentications/Login";
import Register from "../Authentications/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://swift-enroll-server.vercel.app/college/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
