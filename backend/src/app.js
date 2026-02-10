const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const {
  getAllDestinations,
  getDestinationByCity,
  createDestination,
  updateDestination,
  deleteDestination
} = require("./controllers/destination.controller");

// DIRECT ROUTES (no router)
app.get("/api/destination", getAllDestinations);
app.get("/api/destination/:city", getDestinationByCity);
app.post("/api/destination", createDestination); // Added POST requests for creating a new destination
app.put("/api/destination/:id", updateDestination); // Added PUT requests for updating a destination by ID
app.delete("/api/destination/:id", deleteDestination); // Added DELETE requests for deleting a destination by ID
app.get("/", (req, res) => {
  res.send("Travel Planner Backend Running");
});

module.exports = app;
