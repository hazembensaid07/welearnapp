// require mongoose
const mongoose = require("mongoose");

// create Contact schema
const schema = mongoose.Schema;

const coursenrollSchema = new schema({
  user: {
    type: Object,
    required: true,
  },
  course: {
    type: Object,
    unique: true,
  },
});
module.exports = Coursenroll = mongoose.model("coursenroll", coursenrollSchema);
