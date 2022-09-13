const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  host: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  performers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
