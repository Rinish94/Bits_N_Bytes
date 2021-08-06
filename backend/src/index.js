const express = require("express");
const booksController = require("./controllers/books.controller");
const usercontroller = require("./controllers/user.controller");
const { multerUploads, dataUri } = require("./middlewares/multer");
const { urlencoded, json } = require("body-parser");
const { resolve } = require("path");
const { uploader, cloudinaryConfig } = require("./config/cloudinaryConfig");
const cors = require("cors");
const app = express();
app.use(json());
app.use(cors());
// app.use(express.json());
app.use(express.static(resolve(__dirname, "src/public")));
app.use(urlencoded({ extended: false }));
// app.post("/upload", multerUploads, (req, res) => {
//   // console.log('req.file : ', req.file)
//   console.log("req.body :", req.body);
// });
app.use("*", cloudinaryConfig);
app.get("/*", (req, res) =>
  res.sendFile(resolve(__dirname, "../public/index.html"))
);
app.post("/upload", multerUploads, (req, res) => {
    console.log('req.file : ', req.file)
  if (req.file) {
    const file = dataUri(req).content;
    console.log(file)
    return uploader
      .upload(file)
      .then((result) => {
        const image = result.url;
        console.log("req.body :", req.body);
        return res.status(200).json({
          messge: "Your image has been uploded successfully to cloudinary",
          data: {
            image,
          },
        });
      })
      .catch((err) =>
        res.status(400).json({
          messge: "someting went wrong while processing your request",
          data: {
            err,
          },
        })
      );
  }
});
app.use("/book", booksController);
app.use("/user", usercontroller);
module.exports = app;

// const { urlencoded, json } = require("body-parser");
// const { resolve } = require("path");
// const { uploader, cloudinaryConfig } = require("./config/cloudinaryConfig");
// const { multerUploads, dataUri } = require("./middlewares/multerUpload");
// app.use(express.static(resolve(__dirname, "src/public")));
// app.use(urlencoded({ extended: false }));
// app.use("*", cloudinaryConfig);
// app.get("/*", (req, res) =>
//   res.sendFile(resolve(__dirname, "../public/index.html"))
// );
// app.post("/upload", multerUploads, (req, res) => {
//   if (req.file) {
//     const file = dataUri(req).content;
//     return uploader
//       .upload(file)
//       .then((result) => {
//         const image = result.url;
//         return res.status(200).json({
//           messge: "Your image has been uploded successfully to cloudinary",
//           data: {
//             image,
//           },
//         });
//       })
//       .catch((err) =>
//         res.status(400).json({
//           messge: "someting went wrong while processing your request",
//           data: {
//             err,
//           },
//         })
//       );
//   }
// });
