const Course = require("../models/course");
exports.addCourse = async (req, res) => {
  try {
    console.log(req.body);
    const newCourse = new Course(req.body);
    console.log(newCourse);
    if (
      !req.body.name ||
      !req.body.overview ||
      !req.body.learn ||
      !req.body.price ||
      !req.body.imgSrc ||
      !req.body.duration ||
      !req.body.enrolled ||
      !req.body.lectures ||
      !req.body.instructor ||
      !req.body.update ||
      !req.body.lessons
    ) {
      res
        .status(400)
        .send({ response: response, message: "you should fill all the forms" });
    }
    const response = await newCourse.save();
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("can not save it");
  }
};
