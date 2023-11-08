const express = require("express");
const router = express.Router();

const {
  getStudents,
  deleteStudent,
  deleteStudentInfo,
} = require("../controllers/studentInfoController");

router.get("/getAllStudents", getStudents);
router.delete("/deleteStudent/:id", deleteStudent);
router.delete("/deleteStudentInfo/:id", deleteStudentInfo);
module.exports = router;
