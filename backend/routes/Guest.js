const express = require("express");
const router = express.Router();
const Guest = require("../models/Guest");

router.get("/guest", async (req, res) => {
  try {
    const guest = await Guest.find();
    res.json(guest);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/score", async (req, res) => {
  const { guestNumber, score } = req.body;
  const guest = new Guest({
    guestNumber,
    score
  });
  try {
    const saveGuest = await guest.save();
    console.log("Aaa");
    res.json(saveGuest);
  } catch (err) {
    console.log("err");
    res.json({ message: err });
  }
});

module.exports = router;
