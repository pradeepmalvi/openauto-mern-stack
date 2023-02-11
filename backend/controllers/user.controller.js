const { User } = require("../models/user.model");
const mongoose = require("mongoose");

const userAdd = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      name,
      email,
    });

    res.json({
      success: true,
      message: "User Added!",
    });
  } catch (error) {
    res.json({ success: false, error: "Email already exist!" });
  }
};

module.exports = {
  userAdd,
};
