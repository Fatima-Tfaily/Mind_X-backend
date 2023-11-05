const express = require("express");
const router = express.Router();
const {
  getAllQuizes,
  getQuizById,
  deleteQuizById,
  addQuizes,
  updateQuiz,
  getQuizByLanguageId,
  getQuizByTeacherId,
} = require("../controllers/quizControllers");
router.post("/addQuiz", addQuizes);
router.get("/getAllQuiz", getAllQuizes);
router.delete("/deleteQuizById/:id", deleteQuizById);
router.put("/updateQuizById/:id", updateQuiz);
router.get("/getQuizById/:id", getQuizById);
router.get("/getQuizByLanguageId/:id", getQuizByLanguageId);

router.get("/getQuizByTeacherId/:id", getQuizByTeacherId);

module.exports = router;
