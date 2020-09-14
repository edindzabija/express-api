const express = require("express");
const router = express.Router();

const book_controller = require("../controllers/book.controller");

router.post("/create", book_controller.book_create);

router.get("/:id", book_controller.book_details);

router.put("/:id/update", book_controller.book_update);

module.exports = router;
