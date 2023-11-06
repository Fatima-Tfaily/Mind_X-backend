const express = require("express");

const router = express.Router();
const {
  addLanguage,
  getAllLanguage,
  getLagnuageById,
    deleteLagnuageById,
   getLagnuageByTeacherId,
  updateLanguage,
  getLanguages
} = require("../controllers/languageControllers");

router.post("/addLanguage", addLanguage);
router.get("/getAllLanguage", getAllLanguage);
router.delete("/deleteLanguageById/:id", deleteLagnuageById);
router.put("/updateLanguageById/:id", updateLanguage);
router.get("/getLanguageById/:id", getLagnuageById);
router.get("/getLanguageByTechearId/:id", getLagnuageByTeacherId);
router.get("/getLanguages", getLanguages);
module.exports = router;
