const express = require("express");
const router = express.Router();

const {
  getAllAppoitment,
  addAppoitment,
  deleteAppoitmentByID,
  getStudentId,
  cancelAppointment,
  getAppoitmentTeacherId
} = require("../controllers/appoitmentController");

router.get("/getAll", getAllAppoitment);
router.get("/getAppById/:id", getAppoitmentTeacherId);
router.get("/getStudentId/:name", getStudentId);
router.post("/add", addAppoitment);
router.delete("/delete/:appoitment_id", deleteAppoitmentByID);

router.post('/cancelAppointment/:id', cancelAppointment);

module.exports = router;
