const Destination = require("../models/destination.model");

// GET all destinations
exports.getAllDestinations = async (req, res) => {
  const destinations = await Destination.find();

  res.status(200).json({
    success: true,
    count: destinations.length,
    destinations
  });
};

// GET destination by city
exports.getDestinationByCity = async (req, res) => {
  const city = req.params.city.toLowerCase();

  const destination = await Destination.findOne({ name: city });

  if (!destination) {
    return res.status(404).json({
      success: false,
      message: "Destination not found"
    });
  }

  res.status(200).json({
    success: true,
    destination
  });
};
