require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');
const chapterRoutes = require("./routes/chapterRoutes");
const languageRoutes=require("./routes/languageRoutes")
const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoutes);
app.use("/language", languageRoutes);
app.use("/chapter", chapterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

require("./config/db");
const userRoutes = require("./routes/userRoute");
const appoitmentRoutes = require("./routes/appoitmentRoute");
const languageRoutes = require("./routes/languageRoute");
app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/appoitment", appoitmentRoutes);
 app.use("/language", languageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
