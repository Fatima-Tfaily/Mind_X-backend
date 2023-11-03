const db = require("../config/db");

const addStudent = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO users (name, email, password, role) VALUES (?,?,?,'student');`,
      [name, email, password]
    );
    console.log(result);
    res.status(201).json({
      success: true,
      message: "User added successfully",
    });
  }catch (error) {
    console.error('Error:', error);
    res.status(400).json({
      success: false,
      message: "Unable to add new user",
      error: error.message, // Send the specific error message to the client
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
const getUserByEmail = async (req, res) => {
  try {
    const [result] = await db.query(`SELECT * FROM users WHERE email = ? AND role = 'student'`, [
      req.body.email
    ]);
    
    res.status(200).json({
      success: true,
      message: "User data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to retrieve new user",
      error,
    });
  }
};
module.exports = { addStudent, studentLogin , getUserByEmail};
