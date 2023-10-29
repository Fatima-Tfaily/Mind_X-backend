const express = require("express");
const router = express.Router();

const {
    getTeacher,
    deleteTeacher
}=require("../controllers/TeacherController");

router.get("/getTeacher", getTeacher);
router.delete("/deleteTeacher/:email", deleteTeacher);
module.exports = router;