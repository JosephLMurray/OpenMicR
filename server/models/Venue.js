const mongoose = require("mongoose");

const { Schema } = mongoose;

const venueSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zipcode: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
