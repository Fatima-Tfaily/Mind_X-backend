
const db = require("../config/db");
const getAllUsers = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM users");
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
const addUsers = async (req, res) => {
    console.log("request", req.body)
      if (!req.body) {
        return res.status(400).json({
          success: false,
          message: "Request body is empty.",
        });
      }

        const { name, email, password, role, image } = req.body;
    console.log("mI", name, email, password, role, image);
     try {
         const result = await db.query('INSERT INTO users (name, email, password, role, image) VALUES (?, ?, ?, ?, ?)', [name, email, password, role, image])

       
         res.status(200).json({
             success: true,
             messsage: "success added",
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
const getUserById = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM users WHERE id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      messgae: "get user by id success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to get user",
      error,
    });
  }
};
module.exports = { getAllUsers, addUsers, getUserById };
