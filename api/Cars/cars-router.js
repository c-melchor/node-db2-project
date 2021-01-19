const express = require("express");
const db = require("../../data/db-config");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res) => {
  const cars = await Cars.getAll();
  console.log(cars);
  res.status(200).json(cars);
});

router.post("/", async (req, res) => {
  const newCar = await Cars.create(req.body);
  res.status(200).json(newCar);
});

module.exports = router;
