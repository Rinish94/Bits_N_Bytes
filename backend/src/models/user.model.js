const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String },
    image: { type: String },
    // sell: { type: Array },
    orders: { type: Array },
    phone: { type: Number },
  },
  { versionKey: false }
);
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);

    this.password = hash;
    next();
  });
});
userSchema.methods.checkPassword = function (password) {
  const hashPassword = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashPassword, (err, same) => {
      if (err) return reject(err);

      resolve(same);
    });
  });
};

module.exports = model("user", userSchema);
