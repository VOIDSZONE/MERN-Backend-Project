const express = require("express");
const dbConnect = require("./config/database");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});

dbConnect();
