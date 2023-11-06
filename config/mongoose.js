const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/ecommercedb")
  .then(() => {
    console.log(`DB connected successfully`);
  })
  .catch((err) => {
    console.log(`Error in connecting ${err}`);
  });
