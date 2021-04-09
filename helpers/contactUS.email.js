const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "key-42a517912b52602805af5606fe4078b4",
    domain: "sandbox5e57cc51ece34e369772de0483328fc4.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: "welearn70@gmail.com",
    subject: subject,
    text: text,
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
