const express = require("express");
const User = require("../models/user");
const job = require("../models/job");
const Offre = require("../models/Offre");
const router = express.Router();

router.get("/offers", async (req, res) => {
  try {
    const offers = await Offre.find().populate("client").populate("handMade");
    res.status(200).json(offers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error });
  }
});
router.get("/users-list/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const findUsers = await User.find({ role: type }).populate("job");
    res.status(200).json({ message: "users List ! ", data: findUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error });
  }
});
router.delete("/delete-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted ! ", data: deleteUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error });
  }
});
router.post("/category", async (req, res) => {
  try {
    const { category } = req.body;
    const newJobName = await job.create({ jobName: category });
    res.status(201).json(newJobName);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
router.put("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateJobName = await job.findByIdAndUpdate(id, { ...req.body });
    res.status(201).json({ message: "job Name Updated ! " });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
router.delete("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteJobName = await job.findByIdAndDelete(id);
    res.status(201).json({ message: "job Name Deleted ! " });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
router.get("/category", async (req, res) => {
  try {
    const jobList = await job.find({}).populate("job");
    res.status(200).json(jobList);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

router.put("/update-user-authorization/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, { authorized: true });
    res.status(200).json({ message: "user Authorized !" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
module.exports = router;
