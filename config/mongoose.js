const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ecommercedb");

const db = mongoose.connection;
db.on("error", console.error.bind("Error connecting to the database"));

db.once("open", function () {
  console.log("connected to the database");
});
module.exports = db;
