import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Dashboard} from "@/pages/dashboard";
import {LearnCourse} from "@/pages/course";
import {Profile} from "@/pages/profile/Profile.tsx";
import {Signup} from "./pages/signup";
import {Authenticated} from "@/layout/Authenticated.ts";
import {Courses} from "./pages/courses";
import "./index.css";
import Login from "./pages/login/Login";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Authenticated>
        <Dashboard />
      </Authenticated>
    ),
  },
  {
    path: "/profile",
    element: (
      <Authenticated>
        <Profile />
      </Authenticated>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/courses/:cid",
    element: <LearnCourse />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);
