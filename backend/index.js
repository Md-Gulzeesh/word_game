require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { dashboardRouter } = require("./routes/Dashboard.routes");
const { playZoneRouter } = require("./routes/Playzone.routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/dashboard",dashboardRouter);
app.use("/playzone",playZoneRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Db connected successfully");
  } catch (error) {
    console.log("Error while connecting to db");
    console.log(error);
  }
  console.log(`Server started on port ${process.env.PORT}`);
});
