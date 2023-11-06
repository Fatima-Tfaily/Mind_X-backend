const express=require('express')

 
const {
  addChapter,
  getAllChapter,
  deleteChapterById,
  updateChapter,
  getChapterById,
  getChapterByLanguageId,
} = require("../controllers/chapterControllers");

const router = express.Router();


router.post("/addChapter", addChapter);
router.get("/getAllChapter", getAllChapter);
router.delete("/deleteChapterById/:id", deleteChapterById);
router.put("/updateChapterById/:id", updateChapter);
router.get("/getChapterById/:id", getChapterById);
router.get("/getChapterByLanguageId/:id", getChapterByLanguageId);
module.exports = router;
