const express = require("express");

const router = express.Router();
router.use((req, res, next) => {
  console.log("DESTINATION ROUTER HIT:", req.method, req.originalUrl);
  next();
});


const {
  getAllDestinations,
  getDestinationByCity
} = require("../controllers/destination.controller");

// GET all destinations
// GET all destinations (force match)
router.get("", getAllDestinations);
router.get("/", getAllDestinations);


// GET destination by city
router.get("/:city", getDestinationByCity);

module.exports = router;
