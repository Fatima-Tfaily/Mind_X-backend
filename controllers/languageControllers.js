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
        0,
        nb_of_chapters,
        language_picture,
      ]
    );

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
const getLagnuageByTeacherId = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM languages WHERE teacher_id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      messgae: "get language by teacher id success",
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
  console.log("first");
  try {
    const [result] = await db.query(
      `DELETE FROM languages WHERE language_id=?`,
      [req.params.id]
    );
    console.log(result);
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

const getLanguages = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM languages");

    // Group languages by category_title
    const groupedLanguages = results.reduce((acc, language) => {
      const category = language.category_title;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(language);
      return acc;
    }, {});

    res.status(200).json({
      success: true,
      message: "Languages retrieved successfully",
      data: groupedLanguages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrieve languages",
      error,
    });
  }
};

const getStudentTeacherId = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM students_info NATURALJOIN languages WHERE teacher_id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      messgae: "get student language by id success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to get student",
      error,
    });
  }
};
module.exports = {
  getAllLanguage,
  addLanguage,
  getLagnuageById,
  deleteLagnuageById,
  updateLanguage,
  getLagnuageByTeacherId,
  getLanguages,
  getStudentTeacherId,
};
