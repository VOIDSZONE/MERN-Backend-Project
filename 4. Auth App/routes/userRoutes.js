const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/signUpController");
const { login } = require("../controllers/loginController");
const { auth, isStudent, isAdmin } = require("../middleware/middleware");

router.post("/signup", signUp);
router.post("/login", login);

router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Student",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Admin",
  });
});

module.exports = router;
