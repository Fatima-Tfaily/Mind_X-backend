const express = require("express");
const router = express.Router();

const {
  getAllAppoitment,
  addAppoitment,
  deleteAppoitmentByID,
} = require("../controllers/appoitmentController");

router.get("/getAllAppoitment", getAllAppoitment);
router.post("/addAppoitment", addAppoitment);
router.delete("/delete/:appoitment_id", deleteAppoitmentByID);

module.exports = router;