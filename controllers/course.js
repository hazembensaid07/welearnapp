const Course = require("../models/course");
exports.addCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);

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
  const query = {};
  if (req.query.search) {
    query.name = {
      $regex: req.query.search,
      $options: "i",
    };
  }
  console.log(req.query);

  if (req.query.category && req.query.category != "All") {
    query.category = req.query.category;
  }

  try {
    const result = await Course.find(query);

    if (result.length === 0) {
      res.status(400).send({ msg: "there is no this category" });
    } else {
      res.send({ message: "courses found", result });
    }
  } catch (error) {
    res.status(402).send({ message: "There is no courses with this category" });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Course.findOne(_id);
    console.log(result);
    if (!result) {
      res.status(400).send({ msg: "there " });
      return;
    } else {
      res.send({ message: "course found ", result });
    }
  } catch (error) {
    res.status(400).send({ message: "There is no course" });
  }
};
