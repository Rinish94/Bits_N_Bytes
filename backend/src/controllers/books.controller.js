const express = require("express");
const router = express.Router();
// const Flat = require("../models/flat.model");
const books = require("../models/books.model");

router.get("/", async (req, res) => {
  // let _limit = +req.query._limit || 10;
  // let page = +req.query._page || 1;
  const book = await books.find({}).populate('seller_name','name email').lean().exec();
  //.skip((page - 1) * _limit)
  //.limit(_limit)

  // for (let i = 0; i < flats.length; i++) {
  //   let num = await resident.countDocuments({ flat: flats[i]._id });
  //   flats[i].no_residents = num;
  // }
  res.status(201).json({ data: book });
});
// router.get("/sort", async (req, res) => {
//   let _limit = +req.query._limit;
//   let page = +req.query._page;
//   let no = +req.query.no || 1;
//   let type = req.query.type;
//   let name = req.query.name;
//   let obj = {};
//   if (type) {
//     obj.type = type;
//   }
//   if (name) {
//     obj.name = name;
//   }
//   const flats = await Flat.find(obj)
//     .skip((page - 1) * _limit)
//     .limit(_limit)
//     .sort({ no: no })
//     .lean()
//     .exec();
//   for (let i = 0; i < flats.length; i++) {
//     let num = await resident.countDocuments({ flat: flats[i]._id });
//     flats[i].no_residents = num;
//   }
//   res.status(201).json({ data: flats });
// });

router.post("/add", async (req, res) => {
  let book = await books.create(req.body);
  res.status(201).json({ data: book });
});

module.exports = router;
