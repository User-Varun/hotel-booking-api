const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rooms_available: {
    type: Number,
    required: true,
  },
  price_per_night: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  facilities: {
    type: Array,
    required: true,
  },
  contact_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pets_allowed: {
    type: Boolean,
    required: true,
  },
  rating_count: {
    type: Number,
    required: true,
  },
  distance_from_city_center: {
    type: Number,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
