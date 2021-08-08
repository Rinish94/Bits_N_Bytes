const { Schema, model } = require("mongoose");

const booksSchema = Schema(
  {
    book_name: { type: String, required: true },
    author_name: { type: String, required: true },
    book_type: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    description: { type: String },
    sharing_status: { type: Boolean },
    charity: { type: Boolean },
    seller_name: { type: Schema.Types.ObjectId, ref: "user", required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("book", booksSchema);