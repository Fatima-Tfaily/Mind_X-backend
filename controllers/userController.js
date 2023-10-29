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
      message: "Unable to add new user",
      error,
    });
  }
};

const addUser = async (req, res) => {
  const { name, email, password, role, image } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO users (name, email, password, role,image) VALUES (?,?,?,?,?);`,
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
      message: "Unable to add new user",
      error,
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
      message: "Unable to add new user",
      error,
    });
  }
};

const deleteUserByID = async (req, res) => {
  try {
    const [result] = await db.query(`Delete FROM users WHERE id= ?`, [
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
      message: "Unable to delete user",
      error,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const query = `SELECT * FROM users WHERE name='${name}' AND email='${email}' AND password='${password}' AND role = 'admin'`;
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

module.exports = {
  getAllUsers,
  addUser,
  getUserByRole,
  deleteUserByID,
  adminLogin,
};
