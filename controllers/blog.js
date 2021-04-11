exports.addArticle = async (req, res) => {
  try {
    const newArticle = new article(req.body);
    const response = await newArticle.save();
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("can not save the article");
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const result = await article.find();
    res.send({ response: result, message: "Articles found" });
  } catch (error) {
    res.status(400).send({ message: "can not get the articles" });
  }
};

exports.getArticleByID = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, message: "Article found" });
  } catch (error) {
    res.status(400).send({ message: "There is no Article with this id" });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
  } catch (error) {
    res.status(400).send("No Article exist with that ID");
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.status(200).send({ message: "Article deleted" })
      : res.send("there is no article with this id");
  } catch (error) {
    res.send("No article exist with that ID");
  }
};
