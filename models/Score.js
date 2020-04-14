const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const SECRET = "mynameis";
const jwt = require("jsonwebtoken");

const ScoreSchema = mongoose.Schema({
  score: {
    type: Number,
  },
});

module.exports = mongoose.model("score", ScoreSchema);
