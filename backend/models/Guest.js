const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
  playerName: String,
  score: String
});

module.exports = mongoose.model("guest", GuestSchema);
