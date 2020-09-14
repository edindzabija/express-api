const Book = require("../models/book.model");

exports.book_create = function (req, res) {
  let book = new Book({
    title: req.body.title,
    author: req.body.author,
  });

  book.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Book created successfully");
  });
};

exports.book_details = function (req, res) {
  Book.findById(req.params.id, function (err, book) {
    if (err) return next(err);
    res.send(book);
  });
};
