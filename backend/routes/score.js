const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = "mynameis";
const Score = require("../models/Score");

router.get("/", async (req, res) => {
  try {
    const score = await Score.find();
    res.json(score);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/add", async (req, res) => {
  const {score } = req.body;
  const savesScore = new Score({
    score,
  });
  try {
    const saveScore = await savesScore.save();
    console.log("Aaa");
    res.json(saveScore);
  } catch (err) {
    console.log("err");
    res.json({ message: err });
  }
});

module.exports = router;
