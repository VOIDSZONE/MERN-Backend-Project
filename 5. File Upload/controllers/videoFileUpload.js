const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

const isFileTypeSupported = (type, supportType) => {
  return supportType.includes(type);
};

exports.videoFileUpload = async (req, res) => {
  try {
    const { name, email, tag } = req.body;

    const file = req.files.videoFile;

    const supportedTypes = ["mp4", "mov"];

    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.json({
        success: false,
        message: "File Type Not Supported",
      });
    }

    const response = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "assets",
      resource_type: "auto",
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
