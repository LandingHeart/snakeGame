const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  playerName: { type: String, require: true },
  score: { type: String, require: true }
});

module.exports = mongoose.model("players", PlayerSchema);
