import { useState } from "react";
import { uploadFile } from "../../services/storage";
import "./UploadFile.scss";

const UploadFile = ({ folder, onFileUpload, placeholder }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadURL, setUploadURL] = useState([]);

  const handlerFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(folder, file, (result) => {
        if (result.status === "pending") {
          setUploadProgress(result.progress);
        }
        if (result.status === "success") {
          setUploadProgress(result.progress);
          setUploadURL(result.url);
          // onFileUpload(result.url);
        }
      });
    }
  };

  return (
    <div className="add-file-container">
      <input
        onChange={handlerFile}
        className="input-class"
        name="productPicture"
        placeholder={placeholder}
        type="file"
      />
      <span>Progress: {uploadProgress}</span>
      {uploadURL && <img className="img-upload" src={uploadURL} />}
    </div>
  );
};
export default UploadFile;
