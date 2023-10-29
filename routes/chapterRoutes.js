const express=require('express')
const { addChapter, getAllChapter, deleteChapterById, updateChapter, getChapterById } = require("../controllers/chapterControllers");

const router = express.Router();


router.post("/addChapter", addChapter);
router.get("/getAllChapter", getAllChapter);
router.delete("/deleteChapterById/:id", deleteChapterById);
router.put("/updateChapterById/:id", updateChapter);
router.get("/getChapterById/:id", getChapterById);
module.exports = router;
