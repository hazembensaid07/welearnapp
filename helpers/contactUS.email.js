const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "daab6adda29233b75985d643cba063cb-1d8af1f4-026c7eda",
    domain: "sandbox985869aeb483402190acde7c5e63c657.mailgun.org",
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
