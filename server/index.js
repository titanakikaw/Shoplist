// const express = require("express");
import express from "express";
import Routes from "./routes/index.routes";
const app = express();

app.get("/", (req, res) => {
  res.end("Hello word");
});

Routes.initRoutes(app);

app.get("/products", (req, res) => {
  const { category } = req.query;
  res.send(category + "ssada");
});

const port = 5000;
app.listen(port, () => {
  console.log("Node server started");
});
