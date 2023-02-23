import express from "express";

const productRoutes = express.Router();

productRoutes.get("/", (req, res) => {
  res.send("product get");
});
productRoutes.post("/", (req, res) => {
  res.send("product post");
});
productRoutes.put("/:id", (req, res) => {
  res.send("product put");
});
productRoutes.delete("/:id", (req, res) => {
  res.send("product delete");
});

export default productRoutes;
