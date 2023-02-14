const express = require("express");
const router = express.Router();

const birthdayController = require("../controller/birthday.controller");

router.post("/create", birthdayController.checkBirthday);

router.get("/daily", birthdayController.getBirthday);

module.exports = router;