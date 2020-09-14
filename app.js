const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const book = require("./routes/book.route");

require('dotenv').config()

const app = express();
// `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ctkj0.mongodb.net/books?retryWrites=true&w=majority`
//mongoose connection
async function dbConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ctkj0.mongodb.net/books?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    );
  } catch (error) {
    handleError(error);
  }
}
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/books", book);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
