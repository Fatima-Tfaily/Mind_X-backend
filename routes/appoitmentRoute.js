const express = require("express");
const router = express.Router();

const {
  getAllAppoitment,
  addAppoitment,
  deleteAppoitmentByID,
} = require("../controllers/appoitmentController");

router.get("/getAll", getAllAppoitment);
router.post("/add", addAppoitment);
router.delete("/delete/:appoitment_id", deleteAppoitmentByID);

module.exports = router;