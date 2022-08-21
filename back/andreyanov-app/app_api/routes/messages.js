var express = require("express");
var router = express.Router();

const messagesController = require("../controllers/messages");

router.get("/:id", messagesController.getById);
router.get("/", messagesController.getList);

router.delete("/", messagesController.delete);

router.post("/add", messagesController.add);

// router.put("/", messagesController.update);

/* Відображення інформації про одну книгу */

module.exports = router;
