const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

const isFileTypeSupported = (type, supportType) => {
  return supportType.includes(type);
};

exports.imageReducerFile = async (req, res) => {
  try {
    const { name, email, tag } = req.body;

    const file = req.files.imageFile;

    const supportedTypes = ["jpeg", "jpg", "png"];

    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.json({
        success: false,
        message: "File Type Not Supported",
      });
    }

    const response = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "assets",
      quality: 70,
    });

    await File.create({ name, email, tag, imageUrl: response.secure_url });

    res.json({
      success: true,
      message: "File Uploaded Successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};
