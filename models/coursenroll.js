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
  },
});
module.exports = Coursenroll = mongoose.model("coursenroll", coursenrollSchema);
