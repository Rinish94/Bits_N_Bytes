const express = require("express");
const router = express.Router();
const resident = require("../models/books.model");

router.get("/", async (req, res) => {
  const residents = await resident.find({}).lean().exec();
  res.status(201).json({ data: residents });
});

router.post("/add", async (req, res) => {
  let residents = await resident.create(req.body);
  res.status(201).json({ data: residents });
});

module.exports = router
