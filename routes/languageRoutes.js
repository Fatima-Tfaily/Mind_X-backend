const express = require("express");
const router = express.Router();
const {
  addLanguage,
  getAllLanguage,
  getLagnuageById,
  deleteLagnuageById,
  updateLanguage,
} = require("../controllers/languageControllers");

router.post("/addLanguage", addLanguage);
router.get("/getAllLanguage", getAllLanguage);
router.delete("/deleteLanguageById/:id", deleteLagnuageById);
router.put("/updateLanguageById/:id", updateLanguage);
router.get("/getLanguageById/:id", getLagnuageById);
module.exports = router;
