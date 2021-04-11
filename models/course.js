// require mongoose
const mongoose = require("mongoose");

// create Contact schema
const schema = mongoose.Schema;

const courseSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  enrolled: {
    type: String,
    required: true,
  },
  lectures: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  update: {
    type: String,
    required: true,
  },
  lessons: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = Course = mongoose.model("course", courseSchema);
