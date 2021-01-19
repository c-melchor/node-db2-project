const express = require("express");
const server = express();
const carsRouter = require("./Cars/cars-router");

server.use(express.json());

server.use("/api/cars", carsRouter);

module.exports = server;
