exports.getCourses = async (req, res) => {
  const query = {};

  if (req.query.userID) {
    query.userID = req.query.userID;
  }
  try {
    const result = await comments.find({ userID: query.userID });
    console.log(result);
    res.send({ response: result, message: "courses found" });
  } catch (error) {
    res.status(400).send({ message: "User bought no courses" });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const newCourse = new Coursenroll(req.body);

    const response = await newCourse.save();
    res.status(200).send(response);
  } catch (error) {
    res.status("can't save it");
  }
};
