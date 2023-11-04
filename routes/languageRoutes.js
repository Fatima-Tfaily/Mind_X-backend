const express = require("express");
const router = express.Router();
const {
  addLanguage,
  getAllLanguage,
  getLagnuageById,
  deleteLagnuageById,
  updateLanguage,
  getLanguages
} = require("../controllers/languageControllers");

router.post("/addLanguage", addLanguage);
router.get("/getAllLanguage", getAllLanguage);
router.delete("/deleteLanguageById/:id", deleteLagnuageById);
router.put("/updateLanguageById/:id", updateLanguage);
router.get("/getLanguageById/:id", getLagnuageById);
router.get("/getLanguages", getLanguages);
module.exports = router;
