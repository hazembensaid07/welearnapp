const { query } = require("express-validator");
const comments = require("../models/comments");

exports.sendComment = async (req, res) => {
  try {
    console.log(req.body);
    const newComment = new comments(req.body);
    console.log(newComment);
    if (req.body.msg === "" || req.body.name === "" || req.body.email === "") {
      res.status(400).send({ message: "Email is required check again" });
    }
    const response = await newComment.save();
    res.status(200).send(response);
  } catch (error) {
    res.status("can't save it");
  }
};

exports.getAllComments = async (req, res) => {
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
