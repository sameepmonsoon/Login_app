import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import all components
import Username from "./Components/Username";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import Profile from "./Components/Profile";
import PageNotFound from "./Components/PageNotFound";
import Recovery from "./Components/Recovery";
import Password from "./Components/Password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
const app = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-red ">
        <RouterProvider router={router}></RouterProvider>
      </h1>
    </div>
  );
};

export default app;
