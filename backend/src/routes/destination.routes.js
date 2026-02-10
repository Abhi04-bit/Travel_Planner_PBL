const express = require("express");
const router = express.Router();

const {
  getDestination
} = require("../controllers/destination.controller");

router.get("/:name", getDestination);

module.exports = router;
