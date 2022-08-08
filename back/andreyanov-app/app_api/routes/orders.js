var express = require("express");
var router = express.Router();

const ordersController = require("../controllers/orders");

/* GET список книг. */

// router.get("/", productsController.getById);
router.get("/", ordersController.getList);
router.get("/:id", ordersController.getById);

/* GET видалення книги за id. */
router.delete("/", ordersController.delete);

/* POST Створення нової книги. */
router.post("/add", ordersController.add);

// Оновлення інформації про книгу після редагування
router.put("/", ordersController.update);

/* Відображення інформації про одну книгу */

module.exports = router;
