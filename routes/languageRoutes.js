const express = require("express");
const { addLanguage, getAllLanguage, getLagnuageById, deleteLagnuageById, updateLanguage } = require("../controllers/languageControllers");
const router = express.Router();


router.post("/addLanguage", addLanguage);
router.get("/getAllLanguage", getAllLanguage);
router.delete("/deleteLanguageById/:id", deleteLagnuageById)
router.put("/updateLanguageById/:id",updateLanguage)
router.get("/getLanguageById/:id", getLagnuageById);
module.exports = router;
