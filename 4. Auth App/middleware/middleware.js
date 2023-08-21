const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is Missing",
      });
    }

    try {
      const paylaod = jwt.verify(token, process.env.JWT_SECRET);

      req.user = paylaod;
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Token is Invalid",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      res.status(401).json({
        success: false,
        message: "This is protected route for Student Only",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(401).json({
        success: false,
        message: "This is protected route for Admin Only",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
