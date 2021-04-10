exports.getCoursesByCategory = async (req, res) => {
  try {
    console.log(req.params);
    const result = await Contact.find({ category: req.params.id });
    res.send({ response: result, message: "Contacts found" });
  } catch (error) {
    res.status(400).send({ message: "There is no contacts with this id" });
  }
};
