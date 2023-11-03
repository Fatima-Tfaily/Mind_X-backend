const express = require("express");
const router = express.Router();

const {
  addStudent,
  studentLogin,
  getUserByEmail,
} = require("../controllers/StudentController");

router.post("/addStudent", addStudent);
router.post("/studentLogin", studentLogin);
router.post("/getUserByEmail", getUserByEmail);

module.exports = router;
