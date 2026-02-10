const Destination = require("../models/destination.model");

exports.getDestination = async (req, res) => {
  try {
    const destinationName = req.params.name.toLowerCase();

    // 1️⃣ Check DB first (CACHE)
    const cachedDestination = await Destination.findOne({
      name: destinationName
    });

    if (cachedDestination) {
      return res.json({
        source: "cache",
        data: cachedDestination
      });
    }

    // 2️⃣ If not found, fetch from APIs (mock for now)
    const fetchedData = {
      name: destinationName,
      state: "Unknown",
      overview: `Discover the beauty of ${destinationName}`,
      bestMonths: ["October", "November", "December"],
      avoidMonths: ["May", "June"],
      hotels: [],
      attractions: [],
      weather: {},
      itinerary: {}
    };

    // 3️⃣ Save to DB
    const newDestination = await Destination.create(fetchedData);

    return res.json({
      source: "api",
      data: newDestination
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch destination",
      error: error.message
    });
  }
};
