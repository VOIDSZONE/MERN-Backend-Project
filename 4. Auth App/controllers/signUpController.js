const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already Exists",
      });
    }

    let hashPasswords;

    try {
      hashPasswords = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }

    const user = await User.create({
      name,
      email,
      password: hashPasswords,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User created Successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating the user",
    });
  }
};
