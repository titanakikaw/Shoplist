import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = ({ user }) => {
  // console.log(user);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <div data-testid="main-wrapper">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

const mapStateToProps = ({ user: { user } }) => ({
  user,
});

export default connect(mapStateToProps, null)(MainLayout);
