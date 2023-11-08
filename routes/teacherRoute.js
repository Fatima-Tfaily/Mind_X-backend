const express = require("express");
const router = express.Router();

const {
  getTeacher,
  deleteTeacher,
  teacherLogin,
  addTeacher
} = require("../controllers/TeacherController");

router.get("/getTeacher", getTeacher);
router.delete("/deleteTeacher/:email", deleteTeacher);
router.post("/teacherLogin", teacherLogin);
router.post("/addTeacher", addTeacher);
module.exports = router;
