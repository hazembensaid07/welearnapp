const User = require("../models/user");

exports.read = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (error) {
    res.send("failed");
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    console.log(result);
    res.send({ response: result, message: "users found" });
  } catch (error) {
    res.status(400).send({ message: "can not get users" });
  }
};

exports.update = (req, res) => {
  // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
  const { name, password } = req.body;

  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    } else {
      user.name = name;
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          error: "Password should be min 6 characters long",
        });
      } else {
        user.password = password;
      }
    }

    user.save((err, updatedUser) => {
      if (err) {
        console.log("USER UPDATE ERROR", err);
        return res.status(400).json({
          error: "User update failed",
        });
      }
      updatedUser.hashed_password = undefined;
      updatedUser.salt = undefined;
      res.json(updatedUser);
    });
  });
};
exports.deleteUsers = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    result.n
      ? res.status(200).send({ message: "user deleted" })
      : res.send("there is no user with this id");
  } catch (error) {
    res.send("No user exist with that ID");
  }
};
