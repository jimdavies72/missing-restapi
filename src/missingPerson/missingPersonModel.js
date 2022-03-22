const mongoose = require("mongoose");

const missingPersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  publicVisible: {
    type: Boolean,
    default: false,
    required: true,
  },
  picURL: {
    type: String,
  },
  missingSince: {
    type: Date,
    required: true,
  },
  missingFrom: {
    type: String,
    require: true,
  },
  ageAtDisappearance: {
    type: Number,
  },
  messages: [
    {
      userId: String,
      title: String,
      text: String,
    },
  ],
});

const MP = mongoose.model("MP", missingPersonSchema);

module.exports = MP;