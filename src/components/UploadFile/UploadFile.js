import { useState, useEffect } from "react";
import { uploadFile } from "../../services/storage";
import "./UploadFile.scss";

const UploadFile = ({ folder, onFileUpload }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadURL, setUploadURL] = useState([]);

  useEffect(() => {
    onFileUpload(uploadURL);
  }, [uploadURL]);

  const handlerFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(folder, file, (result) => {
        if (result.status === "pending") {
          setUploadProgress(result.progress);
        }
        if (result.status === "success") {
          setUploadProgress(result.progress);
          setUploadURL([...uploadURL, result.url]);
        }
      });
    }
    console.log("uploadURL => ", uploadURL);
  };

  return (
    <div className="add-file-container">
      <input
        onChange={handlerFile}
        className="input-class-file"
        name="productPicture"
        placeholder="Seleccionar archivo"
        type="file"
      />
      <div className="file-image-container">
        {uploadURL &&
          uploadURL.map((pic, i) => (
            <div key={pic}>
              <img alt={`product-img ${i}`} className="img-upload" src={pic} />
            </div>
          ))}
        <span>Progress: {uploadProgress}</span>
      </div>
    </div>
  );
};
export default UploadFile;
