const db = require("../config/db");
const getQuizByLanguageId = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM quizes  WHERE language_id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      messgae: "get quiz by language id success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to get quiz",
      error,
    });
  }
};
const getQuizByTeacherId = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM quizes INNER JOIN languages ON quizes.language_id=languages.language_id WHERE languages.teacher_id=${req.params.id}`
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

  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }

  const {
    language_id,
    grade="25",
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
      "INSERT INTO quizes ( language_id,grade,quiz,option1,option2,option3,option4,answer) VALUES (?,?,?,?,?,?,?,?)",
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
      `UPDATE quizes 
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
        language_id,
        grade,
        quiz,
        option1,
        option2,
        option3,
        option4,
        answer,
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
  getQuizByLanguageId,
  getAllQuizes,
  deleteQuizById,
  addQuizes,
  updateQuiz,
  getQuizById,
  getQuizByTeacherId,
};
