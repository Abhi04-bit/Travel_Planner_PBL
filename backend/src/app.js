const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("India Travel Planner API is running");
});

module.exports = app;
const destinationRoutes = require("./routes/destination.routes");

app.use("/api/destination", destinationRoutes);
