const { sendEmailWithNodemailer } = require("../helpers/email");

exports.sendMessage = (req, res) => {
  try {
    const msg = req.body;
    console.log(msg);
    res.status(200).send(msg);
  } catch (error) {
    res.status(400).send("can not send  it");
  }
};
