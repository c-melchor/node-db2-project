const express = require("express");
const db = require("../../data/db-config");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Cars.getAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCar = await Cars.create(req.body);
    res.status(200).json(newCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
