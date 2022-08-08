var express = require("express");
var router = express.Router();

const messagesController = require("../controllers/messages");

/* GET список книг. */

// router.get("/", productsController.getById);
router.get("/", messagesController.getList);

/* GET видалення книги за id. */
// router.delete("/", productsController.delete);

/* POST Створення нової книги. */
router.post("/add", messagesController.add);

// Оновлення інформації про книгу після редагування
// router.put("/", productsController.update);

/* Відображення інформації про одну книгу */

module.exports = router;
