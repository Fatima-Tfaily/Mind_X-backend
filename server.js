require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("./config/db");
const studentRoutes = require("./routes/StudentRoute");
const userRoutes = require('./routes/userRoute');
const languageRoutes = require("./routes/languageRoutes");
const chapterRoutes = require("./routes/chapterRoutes");
const appoitmentRoutes = require("./routes/appoitmentRoute");
const request=require("./routes/teacherRequestRoute");
const studentInfo= require("./routes/studentInfoRoute");
const teacher = require("./routes/teacherRoute");
const quiz=require("./routes/quizRoutes")
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/student", studentRoutes);
app.use("/language", languageRoutes);
app.use("/chapter", chapterRoutes);
app.use("/appoitment", appoitmentRoutes);
app.use("/request", request);
app.use("/studentInfo", studentInfo);
app.use("/teacher", teacher);
app.use("/quiz", quiz);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  
