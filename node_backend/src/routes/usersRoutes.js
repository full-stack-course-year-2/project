const express = require("express");
const auth = require("../middlewares/auth");
const {
  login,
  register,
  find,
  findAll,
  remove,
  update,
} = require("../services/usersService");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id", find);
router.get("/", auth, findAll);
router.delete("/:id", auth, remove);
router.patch("/", update);

module.exports = router;
