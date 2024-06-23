const express = require("express");
const job = require("../models/job");
const handMadeDetails = require("../models/handMadeDetails");
const isAuth = require("../middlewares/auth");
const User = require("../models/user");
const Offre = require("../models/Offre");
const mongoose = require("mongoose");
const router = express.Router();

// add project
router.put("/add-project", isAuth, async (req, res) => {
  try {
    const { name, description, Photo } = req.body;
    const handMade = await handMadeDetails.findOne({ user: req.user._id });
    handMade.project.push({
      name,
      description,
      Photo,
    });
    await handMadeDetails.findOneAndUpdate(
      { user: req.user._id },
      { ...handMade }
    );

    res.status(200).json({ message: "project added !" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/delete-project/:id", isAuth, async (req, res) => {
  try {
    const handMade = await handMadeDetails.findOne({ user: req.user._id });
    const filtred = handMade.project.filter((el) => el._id != req.params.id);
    await handMadeDetails.findOneAndUpdate(
      { user: req.user._id },
      { project: filtred }
    );

    res.status(200).json({ message: "project deleted !" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/update-profile", isAuth, async (req, res) => {
  try {
    const { description } = req.body;
    if (description !== undefined) {
      await handMadeDetails.findOneAndUpdate(
        { user: req.user._id },
        { description: description }
      );
    }
    await User.findByIdAndUpdate(req.user._id, { ...req.body });

    res.status(200).json({ message: "profile updated !" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update offer status
router.put("/update-offer/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const updatedOffer = await Offre.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.status(200).json({ message: "offer updated", updatedOffer });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get offers by handMade
router.get("/handMade-offers", isAuth, async (req, res) => {
  try {
    const offers = await Offre.find({ handMade: req.user._id }).populate(
      "client"
    );
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
