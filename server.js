require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("./config/db");
const userRoutes = require('./routes/userRoute');
const languageRoutes = require("./routes/languageRoute");
const chapterRoutes = require("./routes/chapterRoutes");
const appoitmentRoutes = require("./routes/appoitmentRoute");
const request=require("./routes/teacherRequestRoute");
const studentInfo= require("./routes/studentInfoRoute");
const teacher= require("./routes/teacherRoute");
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/language", languageRoutes);
app.use("/chapter", chapterRoutes);
app.use("/appoitment", appoitmentRoutes);
app.use("/request", request);
app.use("/studentInfo", studentInfo);
app.use("/teacher", teacher);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  
