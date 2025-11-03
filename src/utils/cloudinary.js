import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    //if local file path is not given then return null
    if (!localFilePath) return null;
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file uploaded seccessfully , check by console log the response
    console.log("Cloudinary upload response:", response.url);
    // return the total response for user
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // delete the local file in case of error
    console.error("Cloudinary upload error:", error);
    return null;
  }
};

export { uploadOnCloudinary };
