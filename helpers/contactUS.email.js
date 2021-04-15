const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "bfb68ea1bbd41dec54d2c3ee86b39471-a09d6718-90036e9f",
    domain: "sandboxee5140facb4e4e7fb51732fb15d95952.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, msg, cb) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: "welearn70@gmail.com",
    subject: subject,
    text: msg,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
// Exporting the sendmail
module.exports = sendMail;
