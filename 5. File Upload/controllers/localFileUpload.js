exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.uploadFile;

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

    file.mv(path, (err) => {
      console.error(err);
    });

    res.status(200).json({
      success: true,
      message: "File Uploaded Successfully",
    });
  } catch (error) {
    console.log("Not Able to Upload File");
    console.error(error);
  }
};
