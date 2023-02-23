import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { loginAction } from "../../actions/authActions";
import CustomForm from "../../components/Forms";
// import { useAuthContext } from "../../context/authContext";
import { loginFields, loginInitValues } from "./loginFields";

const Login = ({ login }) => {
  // const { login } = useAuthContext();

  return (
    <CustomForm
      initialValues={loginInitValues}
      onSubmit={login}
      fields={loginFields}
      btnText="Sign In"
    >
      {
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="changepassword"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      }
    </CustomForm>
  );
};

Login.propType = {};

const mapDispatchToProps = (dispatch) => ({
  login: (values) =>
    dispatch({
      type: "LOGIN_REQUEST",
      payload: values,
      meta: { loadingId: -1 },
    }),
});

export default connect(null, mapDispatchToProps)(Login);
