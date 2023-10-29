const express = require("express");
const router = express.Router();

const { addStudent,studentLogin } = require("../controllers/StudentController");

router.post("/addStudent", addStudent);
router.post("/studentLogin", studentLogin);
module.exports = router;
