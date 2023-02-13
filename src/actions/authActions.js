import APIrequest from "../utils/APIrequest";

export const loginAction = (values) => async (dispatch) => {
  const type = "LOGIN";
  await APIrequest({
    type,
    apiData: {
      method: "post",
      url: "login",
      data: values,
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};

export const registerAction = (values) => async (dispatch) => {
  const type = "REGISTER";
  await APIrequest({
    type,
    apiData: {
      method: "post",
      url: "register",
      data: values,
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};
