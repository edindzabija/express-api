const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const book = require("./routes/book.route");

const app = express();
// Set up mongoose connection
let dev_db_url =
  "insert connection string here";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/books", book);

const port = 5000;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
