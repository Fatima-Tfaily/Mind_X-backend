const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addUser,
  getUserByRole,
  deleteUserByID,
} = require("../controllers/userController");

router.get("/getAll", getAllUsers);
router.get("/get/:role", getUserByRole);
router.post("/add", addUser);
router.delete("/delete/:id", deleteUserByID);

module.exports = router;
