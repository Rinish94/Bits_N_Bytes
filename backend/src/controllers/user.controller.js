const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("dotenv").config();
const newToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
};
router.get("/", async (req, res) => {
  const user = await User.find({}).lean().exec();
  res.status(201).json({ data: user });
});

router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(401).send({ error: "user already exists" });
  }
  user = await User.create(req.body);
  const token = newToken(user);
  res.status(201).json({ data: user, token: token });
});

router.post("/signin", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ error: "user not found" });
  }
  const match = await user.checkPassword(req.body.password);
  if (!match) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  const token = newToken(user);
  // console.log(token)
  res.status(201).json({ user: user, token: token });
});

module.exports = router;
