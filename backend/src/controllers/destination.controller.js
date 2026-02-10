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

//POST create new destination

exports.createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json({
      success: true,
      destination
    });
  } catch (error) {
    if(error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Destination with this name already exists"
      });
    }
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// PUT - Update destination by ID
exports.updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDestination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found"
      });
    }

    res.status(200).json({
      success: true,
      destination: updatedDestination
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE - Remove destination by ID
exports.deleteDestination = async (req, res) => {
  try {
    const deletedDestination = await Destination.findByIdAndDelete(
      req.params.id
    );

    if (!deletedDestination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Destination deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

