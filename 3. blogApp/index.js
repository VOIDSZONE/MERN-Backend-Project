const express = require("express");
const connctionWithDb = require("./config/database");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/v1", blogRoutes);

app.use("/", (req, res) => {
  res.send("THis is Home page");
});

app.listen(PORT, () => {
  console.log(`App is started on port ${PORT}`);
});

connctionWithDb();
