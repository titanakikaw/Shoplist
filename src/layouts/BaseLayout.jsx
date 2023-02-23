import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Error from "../components/Errors";

const Baselayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      dispatch({ type: "LOGIN_SUCCESS", payload: token });
    }
  }, [dispatch]);

  return (
    <>
      <Outlet />
      <Error />
    </>
  );
};

export default Baselayout;
