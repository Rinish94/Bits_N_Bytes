const express = require("express");
const router = express.Router();
// const Flat = require("../models/flat.model");
const books = require("../models/books.model");

router.get("/", async (req, res) => {
  // let _limit = +req.query._limit || 10;
  // let page = +req.query._page || 1;
  const book = await books.find({}).populate('seller_name','name email _id').lean().exec();
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

//to get all the books user has kept for sale or charity
router.get("/user/:id", async(req, res) => {
  const id = req.params.id
  let book = await books.find().lean().exec()
  let selBook = []
  for(let i = 0; i < book.length; i++){
    if(id == book[i].seller_name){
      selBook.push(book[i]);
    }
  }
  res.status(200).json({ID: id , data: selBook });
})

//filter charity
router.get("/charity", async(req, res) => {
  let book = await books.find({charity: true}).lean().exec()
  res.status(200).json({data: book });
})

//filter sale
router.get("/sale", async(req, res) => {
  let book = await books.find({charity: false}).lean().exec()
  res.status(200).json({data: book });
})

//filter acrding to type
router.get("/type/:cat", async(req, res) => {
  let type = req.params.cat
  let book = await books.find({book_type: `${type}`}).lean().exec()
  res.status(200).json({data: book});
})

//Search books
router.get("/search/:item", async(req, res) => {
  let data = req.params.item
  let result = await books.find({book_name: {$regex: data}}).lean().exec()
  res.status(200).json({data: result});
})

router.post("/add", async (req, res) => {
  let book = await books.create(req.body);
  res.status(201).json({ data: book });
});

module.exports = router;
