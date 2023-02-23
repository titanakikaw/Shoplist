import express from "express";

const cartRoutes = express.Router();

cartRoutes.get("/", (req, res) => {
  res.send("cart get");
});
cartRoutes.post("/", (req, res) => {
  res.send("cart post");
});
cartRoutes.put("/:id", (req, res) => {
  res.send("cart put");
});
cartRoutes.delete("/:id", (req, res) => {
  res.send("cart delete");
});

export default cartRoutes;
