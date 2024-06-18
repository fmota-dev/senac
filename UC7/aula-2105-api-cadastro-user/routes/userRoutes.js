const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/users", userController.getUsers);
router.post("/users/cadastro", userController.addUser);
router.get("/users/:email", userController.getUserByEmail);

module.exports = router;
