const express = require("express");
const todoRoutes = require("./routes/todos");
const dbConnect = require("./config/database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

dbConnect();
