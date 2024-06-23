const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/auth");
const User = require("../models/user");
require("dotenv").config();
const nodemailer = require("nodemailer");
const handMadeDetails = require("../models/handMadeDetails");
const user = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      city,
      town,
      diplome,
      cin,
      phoneNumber,
      address,
      role,
      job,
    } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      res.status(409).json({ status: false, message: "Email already Exist !" });
    } else {
      bcrypt.hash(password, 12, async (err, hash) => {
        if (err) {
          res.status(500).json({ status: false, message: err });
        } else if (hash) {
          if (role == "client") {
            const user = await User.create({
              fullName,
              email,
              password: hash,
              phoneNumber,
              address,
              role,
            });
            res.status(201).json({
              status: true,
              message: `${role} created successfully`,
              data: user,
            });
          } else if (role == "handMade") {
            const user = await User.create({
              fullName,
              email,
              password: hash,
              city,
              job,
              town,
              diplome,
              cin,
              phoneNumber,
              address,
              role,
            });
            const newHandMadeDetails = await handMadeDetails.create({
              user: user._id,
              jobName: job,
              project: [],
            });
            res.status(201).json({
              status: true,
              message: `${role} created successfully`,
              data: user,
            });
          }
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });

    if (findUser) {
      if (findUser.authorized) {
        bcrypt.compare(password, findUser.password).then(function (result) {
          if (result == true) {
            jwt.sign(
              {
                username: findUser.username,
                email: findUser.email,
                role: findUser.role,
                _id: findUser._id,
              },
              process.env.SECRETKEY,
              {
                expiresIn: "7d",
              },
              (err, token) => {
                if (err) {
                  console.log(err);
                } else if (token) {
                  res.status(200).json({
                    message: "Logged Successfully",
                    data: token,
                    findUser,
                  });
                }
              }
            );
          } else {
            res.status(404).json({ message: "password wrong ! " });
          }
        });
      } else {
        res.status(401).json({
          message: "Your not Authorized To Sign in Please Contact Support",
        });
      }
    } else {
      res.status(404).json({ message: "Email not Found ! " });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/current", isAuth, async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id).select("-password");
    res.send({ status: true, msg: "authorized", user });
  } else {
    res.send({ status: false, msg: "unauthorised" });
  }
});

//part added by me
// Change Password
router.put("/change-password", isAuth, async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ _id: req.user._id });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the provided old password matches the stored password
    const validPassword = await bcrypt.compare(
      req.body.oldPassword,
      user.password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid old password" });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(req.body.newPassword, 10);

    // Update user's password with the new hashed password
    user.password = hashedNewPassword;

    // Save the updated user to the database
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/get-handMade-services", async (req, res) => {
  try {
    const handMadeServices = await User.find({ role: "handMade" }).populate(
      "job"
    );
    res.status(200).json(handMadeServices);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.get("/get-handMade-service/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const handMadeService = await User.findOne({
      role: "handMade",
      _id: id,
    }).populate("job");
    const profileDetails = await handMadeDetails
      .findOne({ user: id })
      .populate("feedBack.client");
    res.status(200).json({ handMadeService, profileDetails });
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
