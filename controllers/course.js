const Course = require("../models/course");
exports.addCourse = async (req, res) => {
  try {
    console.log(req.body);
    const newCourse = new Course(req.body);
    console.log(newCourse);

    const response = await newCourse.save();
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("can not save it");
  }
};
