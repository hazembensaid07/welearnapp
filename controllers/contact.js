const sendMail = require("../helpers/contactUs.email");

exports.sendMessage = (req, res) => {
  const { name, email, subject, msg } = req.body;
  console.log("Data: ", req.body);
  sendMail(name, email, subject, msg, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.status({ message: "Email sent!!!" });
    }
  });
};
