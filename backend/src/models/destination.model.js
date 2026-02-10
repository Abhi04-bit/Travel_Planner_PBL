const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: String,

  overview: String,

  hotels: {
    standard: [String],
    premium: [String],
    deluxe: [String],
    luxury: [String]
  },

  famousFood: [String],
  mustVisitPlaces: [String],
  sufficientDays: Number,

  climate: String,
  clothes: [String],

  approxExpense: String,

  bookingLinks: {
    flights: String,
    trains: String,
    buses: String
  },

  activities: [String],
  itinerary: [String],

  photos: [String],
  facts: [String],

  bestMonths: [String],
  avoidMonths: [String]
}, { timestamps: true });

module.exports = mongoose.model("Destination", destinationSchema);
