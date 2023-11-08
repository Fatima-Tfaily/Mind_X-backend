const express = require("express");
const router = express.Router();

const {
  addStudent,
  studentLogin,
  getStudentByEmail,
  updateStudent,
  getStudentAppoitment
} = require("../controllers/StudentController");

router.post("/addStudent", addStudent);
router.post("/studentLogin", studentLogin);
router.get("/getStudentByEmail/:email", getStudentByEmail);
router.post("/updateStudent", updateStudent);
router.get("/getStudentAppoitment/:email", getStudentAppoitment);

module.exports = router;
