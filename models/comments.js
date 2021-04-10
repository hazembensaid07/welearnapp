// require mongoose
const mongoose = require("mongoose");

// create Contact schema
const schema = mongoose.Schema;

const commentsSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  msg: {
    type: String,
    required: true,
  },
});

module.exports = comments = mongoose.model("comments", commentsSchema);
