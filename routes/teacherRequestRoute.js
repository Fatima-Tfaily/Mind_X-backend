const express = require("express");
const router = express.Router();

const {
    sendRequest,
     getRequests,
     deleteRequesteById
  } =require("../controllers/TeacherRequestController");

router.post("/sendRequest", sendRequest);
router.get("/getRequests", getRequests);
router.delete("/deleteRequest/:id", deleteRequesteById);
module.exports = router;