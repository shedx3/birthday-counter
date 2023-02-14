const express = require("express");
const router = express.Router();

const letterRouter = require("../controller/letter.controller");

router.get("/gen",letterRouter.letter);

module.exports = router;