const express = require("express");
const {
  create,
  findTodos,
  update,
  remove,
} = require("../services/todosService");

const router = express.Router();

router.post("/create", create);
router.get("/find", findTodos);
router.patch("/update", update);
router.delete("/delete", remove);

module.exports = router;
