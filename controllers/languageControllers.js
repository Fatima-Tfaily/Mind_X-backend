const db = require("../config/db");
const getAllLanguage = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM languages");
    res.status(200).json({
      success: true,
      messgae: "language  retrieved successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to added language",
      error,
    });
  }
};

const addLanguage = async (req, res) => {
  console.log("request", req.body);
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }

  const {
    language_name,
    category_title,
    days_to_complete,
    teacher_id,
    nb_of_students,
    nb_of_chapters,
    language_picture,
  } = req.body;
    console.log(
      language_name,
      category_title,
      days_to_complete,
      teacher_id,
      nb_of_students,
      nb_of_chapters,
      language_picture
    );
    

  try {
    const result = await db.query(
      "INSERT INTO languages ( language_name,category_title,days_to_complete,teacher_id,nb_of_students,nb_of_chapters,language_picture) VALUES (?, ?, ?, ?, ?,?,?)",
      [
        language_name,
        category_title,
        days_to_complete,
        teacher_id,
        nb_of_students,
        nb_of_chapters,
        language_picture,
      ]
    );

    await result.save();
    res.status(200).json({
      success: true,
      messsage: "success added",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to added language",
      error,
    });
  }
};
const getLagnuageById = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM languages WHERE language_id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      messgae: "get language by id success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to get language",
      error,
    });
  }
};
const deleteLagnuageById = async (req, res) => {
  try {
    const [result] = await db.query(
      `DELETE FROM languages WHERE  language_id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      messgae: "get language by id success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to get language",
      error,
    });
  }
};
const updateLanguage = async (req, res) => {
  console.log("request", req.body);
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }

  const {
    language_name,
    category_title,
    days_to_complete,
    teacher_id,
    nb_of_students,
    nb_of_chapters,
    language_picture,
  } = req.body;

  try {
      const result = await db.query(
        `UPDATE languages 
       SET 
        language_name = ?,
        category_title = ?,
        days_to_complete = ?,
        teacher_id = ?,
        nb_of_students = ?,
        nb_of_chapters = ?,
        language_picture = ?
       WHERE language_id = ?`,
        [
          language_name,
          category_title,
          days_to_complete,
          teacher_id,
          nb_of_students,
          nb_of_chapters,
          language_picture,
          req.params.id,
        ]
      );
      console.log(
          req.params.id,
        language_name,
        category_title,
        days_to_complete,
        teacher_id,
        nb_of_students,
        nb_of_chapters,
        language_picture
      );

    await result.save();
    res.status(200).json({
      success: true,
      messsage: "success added",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to added language",
      error,
    });
  }
};
module.exports = { getAllLanguage ,addLanguage,getLagnuageById,deleteLagnuageById,updateLanguage}