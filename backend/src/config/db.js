const mongoose = require("mongoose");
require("dotenv").config();
// const URI= require('MONGO_URI')

function connect() {
  return mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = connect;
