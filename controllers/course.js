const Course = require("../models/course");
exports.addCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    console.log(newCourse);
    if (
      req.body.name === "" ||
      req.body.overview === "" ||
      req.body.learn === "" ||
      req.body.price === "" ||
      req.body.imgSrc === "" ||
      req.body.duration === "" ||
      req.body.enrolled === "" ||
      req.body.lectures === "" ||
      req.body.instructor === "" ||
      req.body.update === "" ||
      req.body.lessons === "" ||
      req.body.category === ""
    ) {
      console.log(newCourse);
      res.status(400).send({
        message: "you should fill all the forms",
      });
    }

    const response = await newCourse.save();

    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("can not save it");
  }
};
exports.getCoursesByCategory = async (req, res) => {
  try {
    const result = await Course.findOne({ _id: req.body.id });
    console.log(result);
    res.send({ message: "courses found " });
  } catch (error) {
    res.status(400).send({ message: "There is no courses with this category" });
  }
};
