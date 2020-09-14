const express = require("express");
// const bodyParser = require("body-parser");

const book = require("./routes/book.route");

const app = express();

app.use("/books", book);

const port = 5000;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
