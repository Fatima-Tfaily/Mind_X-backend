const db = require("../config/db");
const getAllQuizes = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM quizes");
    res.status(200).json({
      success: true,
      messgae: "quizes  retrieved successfuly",
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

const addQuizes= async (req, res) => {
  console.log("request", req.body);
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }

  const {
    language_id,
    grade,
    quiz,
    option1,
    option2,
    option3,
    option4,
    answer,
  } = req.body;
  console.log(
    language_id,
    grade,
    quiz,
    option1,
    option2,
    option3,
    option4,
    answer
  );

  try {
    const result = await db.query(
      "INSERT INTO quizes ( language_id,grade,quiz,option1,option2,option3,option4,answer) VALUES (?, ?, ?, ?, ?,?,?,?)",
      [language_id, grade, quiz, option1, option2, option3, option4, answer]
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
const getQuizById = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM quizes WHERE quiz_id=${req.params.id}`
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
const deleteQuizById = async (req, res) => {
  console.log("first");
  try {
    const [result] = await db.query(`DELETE FROM quizes WHERE quiz_id=?`, [
      req.params.id,
    ]);
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
const updateQuiz = async (req, res) => {
  console.log("request", req.body);
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }

  const {
    language_id,
    grade,
    quiz,
    option1,
    option2,
    option3,
    option4,
    answer,
  } = req.body;

  try {
    const result = await db.query(
      `UPDATE languages 
       SET 
        language_id = ?,
        grade = ?,
        quiz=?,
        option1 = ?,
        option2 = ?,
        option3 = ?,
        option4 = ?,
        answer = ?
       WHERE quiz_id = ?`,
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
      messgae: "unable to added quiz",
      error,
    });
  }
};
module.exports = {
  getAllQuizes,
  deleteQuizById,
  addQuizes,
  updateQuiz,
  getQuizById,
};
