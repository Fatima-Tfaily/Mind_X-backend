const express = require("express");
const router = express.Router();

const {
    getTeacher,
    deleteTeacher,
    teacherLogin
}=require("../controllers/TeacherController");

router.get("/getTeacher", getTeacher);
router.delete("/deleteTeacher/:email", deleteTeacher);
router.post("/teacherLogin", teacherLogin);
module.exports = router;