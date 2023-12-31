const express = require("express");
const router = express.Router();

const {
    getStudents,
    deleteStudent,
    getStudentInformation,
    dropCourse,
    deleteEverythingStudent,
    enrollCourse,
  deleteStudentInfo,
} = require("../controllers/studentInfoController");

router.get("/getStudentInformation/:email", getStudentInformation);
router.get("/getAllStudents", getStudents);
router.delete("/deleteStudent/:id", deleteStudent);
router.delete("/dropCourse/:id", dropCourse);
router.delete("/ deleteEverythingStudent/:email",  deleteEverythingStudent);
router.post("/enrollCourse", enrollCourse);
router.delete("/deleteStudentInfo/:id", deleteStudentInfo);
module.exports = router;
