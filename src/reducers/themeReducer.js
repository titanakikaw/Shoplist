export const themeInitValue = "DARK";

export const themeReducer = (state = themeInitValue, { type, payload }) => {
  switch (type) {
    case "CHANGE_THEME":
      return state === "DARK" ? "LIGHT" : "DARK";
    default:
      return state;
  }
};
