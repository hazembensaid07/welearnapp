exports.getCourses = async (req, res) => {
  const query = {};

  if (req.query.user) {
    query.user = req.query.user;
  }
  try {
    const result = await Coursenroll.find({ user: query.user });
    console.log(result);
    res.send({ response: result, message: "courses found" });
  } catch (error) {
    res.status(400).send({ message: "User bought no courses" });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const newCourse = new Coursenroll(req.body);
    console.log(
      "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    );
    console.log(req.body);

    const response = await newCourse.save();
    console.log(
      "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    );
    console.log(response);

    res.status(200).send(response);
  } catch (error) {
    res.status("can't save it");
  }
};
