exports.getCourses = async (req, res) => {
  const query = {};

  if (req.query.id) {
    console.log(req.query.id);
    query.id = req.query.id;
  }
  console.log(query);
  try {
    const result = await comments.find({ articleID: query.id });
    console.log(result);
    res.send({ response: result, message: "Comments found" });
  } catch (error) {
    res.status(400).send({ message: "can not get comments" });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const newComment = new comments(req.body);

    const response = await newComment.save();
    res.status(200).send(response);
  } catch (error) {
    res.status("can't save it");
  }
};
