const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const book = require("./routes/book.route");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//mongoose connection
const dbConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ctkj0.mongodb.net/books?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    handleError(error);
  }
};

dbConnect();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/books", book);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
