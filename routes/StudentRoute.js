const express = require("express");
const router = express.Router();

const {
  addStudent,
  studentLogin,
  getUserByEmail,
  updateStudent
} = require("../controllers/StudentController");

router.post("/addStudent", addStudent);
router.post("/studentLogin", studentLogin);
router.get("/getUserByEmail/:email", getUserByEmail);
router.post("/updateStudent", updateStudent);

module.exports = router;
