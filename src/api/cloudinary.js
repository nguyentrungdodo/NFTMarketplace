import axios from "axios";

const CLOUDINARY_CLOUD_NAME = "imdo2412";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;

const uploadCloudinary = (file) => {
  console.log("file", file);
  const formData = new FormData();
  formData.append("file", file);
  // const metaData = { name: "Metadata" };
  // formData.append('upload_preset', 'xb9v0cuf');
  formData.append("upload_preset", "l3jzfbdx");
  formData.append("folder", "nft_generator");
  // formData.append("metadata", '12412451');

  return axios.post(CLOUDINARY_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data;",
    },
  });
};

export default uploadCloudinary;
