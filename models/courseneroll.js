// require mongoose
const mongoose = require("mongoose");

// create Contact schema
const schema = mongoose.Schema;

const coursenrollSchema = new schema({
  userID: {
    type: String,
    required: true,
  },
  courseID: {
    type: String,
    required: true,
  },
});
module.exports = Coursenroll = mongoose.model("course", coursenrollSchema);
