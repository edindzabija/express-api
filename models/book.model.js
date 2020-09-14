const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  author: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model("Book", BookSchema);
