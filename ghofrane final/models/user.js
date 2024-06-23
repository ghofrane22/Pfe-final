const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: function () {
        return this.role !== "admin";
      },
    },
    role: {
      type: String,
      enum: ["admin", "client", "handMade"],
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
      required: function () {
        return this.role == "handMade";
      },
    },
    city: {
      type: String,
      required: function () {
        return this.role == "handMade";
      },
    },
    town: {
      type: String,
      required: function () {
        return this.role == "handMade";
      },
    },
    phoneNumber: {
      type: Number,
      required: function () {
        return this.role !== "admin";
      },
      unique: true,
    },
    cin: {
      type: Number,
      required: function () {
        return this.role == "handMade";
      },
    },
    diplome: {
      type: String,
      required: function () {
        return this.role == "handMade";
      },
    },
    available: {
      type: String,
      required: function () {
        return this.role == "handMade";
      },
      default: function () {
        return this.role !== "admin";
      },
    },
    authorized: {
      type: Boolean,
      default: function () {
        return this.role !== "handMade";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
