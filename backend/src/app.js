// const express = require("express");
// const app = express();

// app.use(express.json());

// // 👇 THIS LINE IS CRITICAL
// const destinationRoutes = require("./routes/destination.routes");


// app.get("/", (req, res) => {
//   res.send("Travel Planner Backend Running 🚀");
// });

// module.exports = app;


//second
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const {
  getAllDestinations,
  getDestinationByCity
} = require("./controllers/destination.controller");

// DIRECT ROUTES (no router)
app.get("/api/destination", getAllDestinations);
app.get("/api/destination/:city", getDestinationByCity);

app.get("/", (req, res) => {
  res.send("Travel Planner Backend Running");
});

module.exports = app;
