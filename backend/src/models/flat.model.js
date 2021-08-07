const { Schema, model } = require("mongoose");

const flatSchema = Schema(
  {
    type: { type: String, required: true },
    block: { type: String, required: true },
    no: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("flat", flatSchema);
