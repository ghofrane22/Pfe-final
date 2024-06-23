const express = require("express");
const router = express.Router();
const Offre = require("../models/Offre");

const isAuth = require("../middlewares/auth");
const handMadeDetails = require("../models/handMadeDetails");

router.get("/offers", isAuth, async (req, res) => {
  try {
    const offers = await Offre.find({ client: req.user._id }).populate(
      "handMade",
      "-password"
    );
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});
router.get("/offer/:id", isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const offer = await Offre.find({ client: req.user._id, handMade: id });
    res.status(200).json(offer);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

// Route PUT pour mettre à jour le profil du client
router.put("/profile", isAuth, async (req, res) => {
  try {
    const {
      fullName,
      avatar,
      email,
     
      address,
      phoneNumber,
    } = req.body;

    const updatedFields = {
      fullName,
      avatar,
      email,
      address,
      phoneNumber,
    };

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      updatedFields,
      { new: true }
    );
    res.status(200).json({ message: "Profil mis à jour", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

router.delete("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProfil = await job.findByIdAndDelete(id);
    res.status(201).json({ message: "profil Name Deleted ! " });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
// Create a new offer
router.post("/send-handMade-offer/:id", isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { time, description } = req.body;
    const offre = new Offre({
      client: req.user._id,
      handMade: id,
      time,
      description,
    });
    const savedOffre = await offre.save();
    res.status(201).json(savedOffre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/add-feedback-to-handMade/:id", isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { comment, rate } = req.body;
    const handMade = await handMadeDetails.findOne({ user: id });

    // Push the new feedback object into the feedback array
    handMade.feedBack.push({ client: req.user._id, comment, rate });
    // Save the updated document
    await handMade.save();
    res.status(200).json({ message: "feedback added !" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
