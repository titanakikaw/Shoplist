import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CustomForm from "../../components/Forms";
import { useAuthContext } from "../../context/authContext";
import { changePassFields, changePassInitValues } from "./changePassFields";

const ChangePassword = () => {
  const { changePass } = useAuthContext();
  const navigate = useNavigate();
  const handleChangePass = useCallback(async (values, actions) => {
    const reload = await changePass(values, actions);
    if (reload) {
      navigate("/auth");
    }
  });

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-1 my-10">
      <h1>Change Password</h1>
      <CustomForm
        initialValues={changePassInitValues}
        onSubmit={handleChangePass}
        fields={changePassFields}
        btnText="Change Password"
      ></CustomForm>
    </div>
  );
};

export default ChangePassword;
