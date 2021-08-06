const jwt = require("jsonwebtoken");

require("dotenv").config();
const User = require("../models/user.model");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

const protect = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(400).json({
        error: "Please provide a bearer token",
      });
    }
    if (!bearerToken.startsWith("Bearer ")) {
      return res.status(400).json({
        error: "Please provide a bearer token",
      });
    }
    const token = bearerToken.split(" ");
    payload = await verifyToken(token[1]);
    if (!payload) {
      return res.status(400).json({
        error: "Please provide a bearer token",
      });
    }
    const user = await User.findById(payload._id).lean().exec();
    req.user = user;
    next();
  } catch (err) {
    return res.status(404).json({
      status: "Error",
      message: "unauthorizd user",
    });
  }
};

module.exports = protect