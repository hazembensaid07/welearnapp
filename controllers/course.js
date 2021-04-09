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
    const { category } = req.body;
    const result = await Course.find({ category });
    console.log(result);
    if (result.length === 0) {
      res.status(400).send({ msg: "there is no this category" });
      return;
    } else {
      res.send({ message: "courses found " });
    }
  } catch (error) {
    res.status(400).send({ message: "There is no courses with this category" });
  }
};
exports.getCourseById = async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await Course.findOne({ _id });
    console.log(result);
    if (!result) {
      res.status(400).send({ msg: "there is no course" });
      return;
    } else {
      res.send({ message: "course found " });
    }
  } catch (error) {
    res.status(400).send({ message: "There is no course" });
  }
};
