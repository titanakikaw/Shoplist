export const userInitState = {
  accessToken: "",
  user: null,
};

export const userReducer = (state = userInitState, { type, payload }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS": {
      localStorage.setItem("token", JSON.stringify(payload));
      return { ...state, ...payload };
    }
    case "LOGOUT": {
      localStorage.clear();
      return userInitState;
    }
    default:
      return state;
  }
};
