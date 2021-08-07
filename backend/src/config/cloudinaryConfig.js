const { config, uploader } = require("cloudinary");
require("dotenv").config();
// dotenv.config();
const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: "dtuda4otc",
    api_key: "936591475777725",
    api_secret: "8uru0w4UAdkQPpepvOlv8sAeGFw",
  });
  next();
};
module.exports = { cloudinaryConfig, uploader };
