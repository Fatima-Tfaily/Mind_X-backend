const db = require("../config/db");

const getAllAppoitment = async (req, res) => {
  try {
    const [result] = await db.query(`SELECT * FROM appoitments`);
    res.status(200).json({
      success: true,
      message: "Appoitments data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to add new appoitment",
      error,
    });
  }
};

const addAppoitment = async (req, res) => {
  const {
    appoitment_name,
    appoitment_date,
    appoitment_start_time,
    appoitment_end_time,
    status,
    student_id,
    teacher_id,
  } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO appoitments (appoitment_name, appoitment_date,appoitment_start_time,appoitment_end_time,status,student_id, teacher_id) VALUES (?,?,?,?,?,?,?);`,
      [
        appoitment_name,
        appoitment_date,
        appoitment_start_time,
        appoitment_end_time,
        status,
        student_id,
        teacher_id,
      ]
    );
    console.log(result);
    res.status(201).json({
      success: true,
      message: "Appoitment added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to add new appoitment",
      error,
    });
  }
};

const deleteAppoitmentByID = async (req, res) => {
  try {
    const [result] = await db.query(
      `Delete FROM appoitments WHERE appoitment_id= ?`,
      [req.params.appoitment_id]
    );
    res.status(200).json({
      success: true,
      message: "Appoitment data deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to delete appoitment",
      error,
    });
  }
};

const getStudentId = async (req, res) => {
  const { name } = req.params;
  try {
    const [result] = await db.query(
      // Corrected SQL query
      `SELECT id FROM appoitments NATURAL JOIN users WHERE name=? AND role="student"`,
      [name] // Pass name as a parameter
    );
    res.status(200).json({
      success: true,
      message: "Appointments data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "No student with this name",
      error,
    });
  }
};

module.exports = {
  getAllAppoitment,
  addAppoitment,
  deleteAppoitmentByID,
  getStudentId,
};
