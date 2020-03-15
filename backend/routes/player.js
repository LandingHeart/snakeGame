const express = require("express");
const router = express.Router();
const Players = require("../models/Player");

router.get("/", async (req, res) => {
  try {
    const player = await Players.find();
    res.json(player);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/add", async (req, res) => {
  const player = new Players({
    
  });
  try {
    const saveQuestion = await player.save();
    res.json(saveQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
