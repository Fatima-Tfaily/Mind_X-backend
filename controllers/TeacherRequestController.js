const db = require("../config/db");

const sendRequest = async (req, res) => {
  console.log("request", req.body);
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is empty.",
    });
  }
  const { teacher_name, teacher_email, message } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO teacherrequest (teacher_name, teacher_email,message ) VALUES (?, ?, ?)",
      [teacher_name, teacher_email, message]
    );

    res.status(200).json({
      success: true,
      message: "request sent successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "unable to send request",
      error,
    });
  }
};

const getRequests = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM teacherrequest");
    res.status(200).json({
      success: true,
      messgae: "Request shown successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "unable to show request",
      error,
    });
  }
};

const deleteRequesteById = async (req, res) => {
  try {
    const [result] = await db.query(
      `DELETE FROM teacherrequest WHERE request_id=${req.params.id}`
    );
    res.status(200).json({
      success: true,
      message: "Delete request by id success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete request",
      error,
    });
  }
};


module.exports = { 
  sendRequest,
   getRequests,
   deleteRequesteById };
