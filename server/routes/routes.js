const express = require("express");
const router = express.Router();

// import controllers
const { getData } = require("../controllers/Data");

router.get("/getData", getData);

module.exports = router;
