const express = require("express");
const { addLanguage, getAllLanguage, getLagnuageById, deleteLagnuageById, getLagnuageByTeacherId,updateLanguage } = require("../controllers/languageControllers");
const router = express.Router();


router.post("/addLanguage", addLanguage);
router.get("/getAllLanguage", getAllLanguage);
router.delete("/deleteLanguageById/:id", deleteLagnuageById)
router.put("/updateLanguageById/:id",updateLanguage)
router.get("/getLanguageById/:id", getLagnuageById);
router.get("/getLanguageByTechearId/:id", getLagnuageByTeacherId);
module.exports = router;
