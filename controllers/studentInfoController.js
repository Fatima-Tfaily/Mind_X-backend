
const db = require("../config/db");

const getStudents = async (req, res) => {
    try {
      const [result] = await db.query(`SELECT * FROM users WHERE role = 'student'`);
      res.status(200).json({
        success: true,
        message: "User data retrieved successfully",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Unable to add new user",
        error,
      });
    }
  };
  const deleteStudent = async (req, res) => {
    try {
      const [result] = await db.query(
        `DELETE FROM users WHERE id=? AND role='student'`,
        [req.params.id]
      );
      res.status(200).json({
        success: true,
        message: "Delete Student success",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Unable to delete student",
        error,
      });
    }
  };
  
  module.exports = {
    getStudents,
    deleteStudent
};