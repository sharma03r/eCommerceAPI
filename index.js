const express = require("express");
const port = 8000;
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: "eCommerce",
    secret: "mySecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/ecommercedb",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongo setup OK");
      }
    ),
  })
);

app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) console.log(`Error encountered ${err}`);
  else console.log("App running on port", port);
});
