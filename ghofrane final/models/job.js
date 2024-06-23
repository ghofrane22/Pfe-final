const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("job", jobSchema);
