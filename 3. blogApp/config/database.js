const mongoose = require("mongoose");
require("dotenv").config();

const connctionWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection with Db Successfull");
    })
    .catch((error) => {
      console.log("SOmething went wrong");
      console.error(error);
      process.exit(1);
    });
};

module.exports = connctionWithDb;
