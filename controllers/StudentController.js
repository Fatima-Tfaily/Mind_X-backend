const db = require("../config/db");

const addStudent = async (req, res) => {
  const { name, email, password, role, image } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO users (name, email, password, role,image) VALUES (?,?,?,'student');`,
      [name, email, password, role]
    );
    console.log(result);
    res.status(201).json({
      success: true,
      message: "User added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to add new user",
      error,
    });
  }
};

const studentLogin = async (req, res) => {
  try {
    const {email, password} = req.body;

    const query = `SELECT * FROM users WHERE  email='${email}' AND password='${password}' AND role = 'student'`;
    const [result] = await db.query(query);

    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: "User data retrieved successfully",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Incorrect information provided",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
module.exports = { addStudent, studentLogin };
