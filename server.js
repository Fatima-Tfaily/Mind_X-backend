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
