const express = require("express");
const fileUpload = require("express-fileupload");
const dbConnect = require("./config/database");
const cloudinaryConnect = require("./config/cloudinary");
const fileRoutes = require("./routes/fileRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1", fileRoutes);

app.listen(PORT, () => {
  console.log(`App is connected to port ${PORT}`);
});

dbConnect();
cloudinaryConnect();
