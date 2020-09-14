const express = require("express");
const router = express.Router();

const book_controller = require("../controllers/book.controller");

router.get("/test", book_controller.test);

module.exports = router;