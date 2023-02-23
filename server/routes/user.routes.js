import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.send("User Infor");
});
userRoutes.post("/", (req, res) => {
  res.send("User Infor");
});
userRoutes.put("/", (req, res) => {
  res.send("User Infor");
});
userRoutes.delete("/", (req, res) => {
  res.send("User Infor");
});

export default userRoutes;
