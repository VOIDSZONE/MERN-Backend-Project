const cloudinary = require("cloudinary").v2;

const cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    console.log("Cloudinary connected Successfully");
  } catch (error) {
    console.log("Cloudinary is not connecting");
    console.error(error);
  }
};

module.exports = cloudinaryConnect;
