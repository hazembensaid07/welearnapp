// require mongoose
const mongoose = require("mongoose");

// create Contact schema
const schema = mongoose.Schema;

const articleSchema = new schema({
  writer: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },

  information: {
    type: String,
    required: false,
  },
  imgSrc: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = article = mongoose.model("article", articleSchema);
