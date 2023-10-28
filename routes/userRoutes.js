const express = require('express');
const router = express.Router();
const { getAllUsers, addUsers, getUserById } = require('../controllers/userControllers');
router.post("/addUser", addUsers);
router.get('/getAll', getAllUsers);

router.get('/get/:id',getUserById)
module.exports = router;