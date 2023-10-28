const db = require("../config/db");

const getTeacher = async (req, res) => {
    try {
      const [result] = await db.query(`SELECT * FROM users WHERE role = 'teacher'`);
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
  const deleteTeacher = async (req, res) => {
    try {
      const [result] = await db.query(
        `DELETE FROM users WHERE email=? AND role='teacher'`,
        [req.params.email]
      );
      res.status(200).json({
        success: true,
        message: "Delete teacher by email success",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Unable to delete teacher",
        error,
      });
    }
  };
  

 module.exports = { 
    getTeacher,
     deleteTeacher
};
