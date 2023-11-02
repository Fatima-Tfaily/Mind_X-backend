const db = require("../config/db");

const getAllChapter = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM language_content");
    res.status(200).json({
      success: true,
      messgae: "user data retrieved successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to added user",
      error,
    });
  }
};

const addChapter = async (req, res) => {
  console.log("request", req.body);
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }

  const {
    language_id,
    chapter_title,
    chapter_content,
    question,
    answer,
    question1,
    answer1,
    question2,
    answer2,
  } = req.body;
  
  console.log(
    language_id,
    chapter_title,
    chapter_content,
    question,
    answer,
    question1,
    answer1,
    question2,
    answer2
  );

  try {
    const result = await db.query(
      "INSERT INTO language_content (  language_id,chapter_title,chapter_content,question,answer,question1,answer1,question2,answer2) VALUES (?, ?, ?, ?, ?,?,?,?,?)",
      [
        language_id,
        chapter_title,
        chapter_content,
        question,
        answer,
        question1,
        answer1,
        question2,
        answer2,
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
      messgae: "unable to added chapter",
      error,
    });
  }
};
const getChapterById = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM language_content WHERE language_content_id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      messgae: "get chapter by id success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to get chapter",
      error,
    });
  }
};
const deleteChapterById = async (req, res) => {
  try {
    const [result] = await db.query(
      `DELETE FROM language_content WHERE  language_content_id=${req.params.id}`
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
const updateChapter = async (req, res) => {
  console.log("request", req.body);
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }

  const {
    language_id,
    chapter_title,
    chapter_content,
    question,
    answer,
    question1,
    answer1,
    question2,
    answer2,
  } = req.body;

  try {
    const result = await db.query(
      `UPDATE language_content 
       SET 
        language_id =?,
        chapter_title=? ,
        chapter_content=? ,
        question=? ,
        answer=?,
        question1 =?,
        answer1 =?,
       question2=?,
        answer2=?
         WHERE language_content_id = ?`,
      [
        language_id,
        chapter_title,
        chapter_content,
        question,
        answer,
        question1,
        answer1,
        question2,
        answer2,
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

    res.status(200).json({
      success: true,
      messsage: "success added",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to added chapter",
      error,
    });
  }
};
module.exports = {
  getAllChapter,
  addChapter,
  getChapterById,
  deleteChapterById,
  updateChapter,
};
