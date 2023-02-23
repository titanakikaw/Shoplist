import express from "express";

const authRoutes = express.Router();
authRoutes.post("/login", (req, res) => {
  res.send("Login request");
});

authRoutes.post("/register", (req, res) => {
  res.send("Register request");
});

authRoutes.post("/forgotPassword", (req, res) => {
  res.send("Forgot Password");
});
export default authRoutes;
