const express = require("express");

const router = express.Router();

const { localFileUpload } = require("../controllers/localFileUpload");
const { imageFileUpload } = require("../controllers/imageFileUpload");
const { videoFileUpload } = require("../controllers/videoFileUpload");
const { imageReducerFile } = require("../controllers/imageReducerFile");

router.post("/localFileUpload", localFileUpload);
router.post("/imageFileUpload", imageFileUpload);
router.post("/videoFileUpload", videoFileUpload);
router.post("/imageReducerFile", imageReducerFile);

module.exports = router;
