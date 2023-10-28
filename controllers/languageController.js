const db = require("../config/db");

const addLanguage = async (req, res) => {
const{
    language_id,
    language_name,
    category_title,
    days_to_complete,
    teacher_id,
    nb_of_students,
    nb_of_chapters,
    language_picture
}= req.body;
try {
    const result = await db.query(
        `INSERT INTO languages (language_id , language_name , category_title , days_to_complete ,teacher_id , nb_of_students ,nb_of_chapters ,language_picture ) VALUES (?,?,?,?,?,?,?, ?);`,
        [
            language_id,
            language_name,
            category_title,
            days_to_complete,
            teacher_id,
            nb_of_students,
            nb_of_chapters,
            language_picture
        ]
      );
      console.log(result);
      res.status(201).json({
        success: true,
        message: "Appoitment added successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Unable to add new appoitment",
        error,
      });
    }
  };

  module.exports = {addLanguage };
