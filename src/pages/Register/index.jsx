import React from "react";
import { registerFields, registerInitValues } from "./registerFields";
import CustomForm from "../../components/Forms";
import { connect } from "react-redux";
import { registerAction } from "../../actions/authActions";
const Register = ({ register }) => {
  return (
    <CustomForm
      initialValues={registerInitValues}
      onSubmit={register}
      fields={registerFields}
      btnText="Sign in"
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  // register: (values, actions) => registerAction(values, actions)(dispatch),
  register: (values, actions) => registerAction(values, actions)(dispatch),
});

export default connect(null, mapDispatchToProps)(Register);
