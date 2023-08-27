const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

require("dotenv").config();

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

fileSchema.post("save", async function (doc) {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    let information = await transporter.sendMail({
      from: "Myself",
      to: doc.email,
      subject: "File Uploaded to Cloudinary",
      html: `<h2>File Uploaded Successfullt</h2><a href=${doc.imageUrl}>${doc.imageUrl}</a>`,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = mongoose.model("File", fileSchema);
