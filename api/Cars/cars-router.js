const express = require("express");
const db = require("../../data/db-config");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res) => {
  const cars = await Cars.getAll();
  res.json(200).json(cars);
});

module.exports = router;
