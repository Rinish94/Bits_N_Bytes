const connect = require("./config/db");
const app = require("./index.js");


async function start() {
  await connect();
  app.listen(8811, () => {
    console.log("listen to port 8811");
  });
}

start();
