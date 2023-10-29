const express = require("express");
const router = express.Router();

const {
    getStudents,
    deleteStudent
}=  require("../controllers/studentInfoController");

router.get("/getAllStudents", getStudents);
router.delete("/deleteStudent/:id", deleteStudent);
module.exports = router;