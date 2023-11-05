const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addUser,
  getUserByRole,
  deleteUserByID,
  adminLogin,
  getTeachers,
  getStudent,
} = require("../controllers/userController");

router.get("/getAll", getAllUsers);
router.get("/get/:role", getUserByRole);
router.post("/add", addUser);
router.delete("/delete/:id", deleteUserByID);
router.post("/adminLogin", adminLogin);
router.get("/getTeachers", getTeachers);
router.get("/getStudent/:name", getStudent);

module.exports = router;
