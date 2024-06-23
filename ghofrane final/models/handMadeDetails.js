const mongoose = require("mongoose");

const handMadeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  jobName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "job",
  },
  description: {
    type: String,
    default: "....",
  },
  feedBack: [
    {
      client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: { type: String },
      rate: { type: Number },
      createdAt: { type: Date, default: new Date() },
    },
  ],
  project: [
    {
      name: { type: String },
      description: { type: String },
      Videos: [
        {
          type: String,
        },
      ],
      Photo: [
        {
          type: String,
        },
      ],
    },
  ],
});
module.exports = mongoose.model("handMadeDetails", handMadeSchema);
