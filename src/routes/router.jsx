import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Baselayout from "../layouts/Baselayout";
import MainLayout from "../layouts/MainLayout";
import ChangePassword from "../pages/ChangePass";
import Home from "../pages/Home/index";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Baselayout />}>
      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="changepassword" element={<ChangePassword />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);
