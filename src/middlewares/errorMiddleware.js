import APIrequest from "../utils/APIrequest";
import axiosInstance from "../utils/axiosInstance";

export const errorMiddleware = (state) => (next) => async (action) => {
  try {
    const { type, payload } = action;
    if (type === "LOGIN_FAIL") {
      await axiosInstance.post("/errors", {
        message: payload.message,
        createdAt: Date().toLocaleString("en-PH"),
      });
    }
    next(action);
  } catch (error) {
    console.log("error", error.message);
  }
};
