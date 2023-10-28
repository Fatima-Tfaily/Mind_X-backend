const express = require("express");
const router = express.Router();
 const{
    addLanguage
 }=require ("../controllers/languageController");
  
router.get("/addLanguage", addLanguage)
module.exports = router;
