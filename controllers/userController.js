const db = require("../config/db");

const getAllUsers = async (req, res) => {
  try {
    const [result] = await db.query(`SELECT * FROM users`);
    res.status(200).json({
      success: true,
      message: "Users data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error retrieving users",
      error: error.message, // Provide more specific error information
    });
  }
};

const addUser = async (req, res) => {
  const { name, email, password, role, image } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO users (name, email, password, role, image) VALUES (?,?,?,?,?);`,
      [name, email, password, role, image]
    );
    console.log(result);
    res.status(201).json({
      success: true,
      message: "User added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error adding a new user",
      error: error.message,
    });
  }
};

const getUserByRole = async (req, res) => {
  try {
    const [result] = await db.query(`SELECT * FROM users WHERE role = ?`, [
      req.params.role,
    ]);
    res.status(200).json({
      success: true,
      message: "User data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error retrieving users by role",
      error: error.message,
    });
  }
};

const deleteUserByID = async (req, res) => {
  try {
    const [result] = await db.query(`DELETE FROM users WHERE id = ?`, [
      req.params.id,
    ]);
    res.status(200).json({
      success: true,
      message: "User data deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error deleting a user",
      error: error.message,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const query = `SELECT * FROM users WHERE name = ? AND email = ? AND password = ? AND role = 'admin'`;
    const [result] = await db.query(query, [name, email, password]);

    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: "Admin login successful",
        data: result,
      });
    } else {
      res.status(401).json({
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

const getTeachers = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM users WHERE role = 'teacher'`
    );
    res.status(200).json({
      success: true,
      message: "Teachers retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error retrieving teachers",
      error: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUserByRole,
  deleteUserByID,
  adminLogin,
  getTeachers,
};
