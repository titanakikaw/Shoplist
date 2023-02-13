export const localeInitValue = "ENGLISH";

export const localeReducer = (state = localeInitValue, { type, payload }) => {
  switch (type) {
    case "CHANGE_LOCALE":
      return state === "ENGLISH" ? "FRENCH" : "ENGLISH";
    default:
      return state;
  }
};
