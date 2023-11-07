const express = require("express");
const router = express.Router();

const {
    getStudents,
    deleteStudent,
    getStudentInformation,
    dropCourse
}=  require("../controllers/studentInfoController");

router.get("/getStudentInformation/:email", getStudentInformation);
router.get("/getAllStudents", getStudents);
router.delete("/deleteStudent/:id", deleteStudent);
router.delete("/dropCourse/:id", dropCourse);
module.exports = router;