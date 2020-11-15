import firebase from "firebase/app";
import "firebase/storage";

export function uploadFile(folder, file, callback) {
  try {
    const storageRef = firebase.storage().ref();
    const fileName = `${+new Date()}-${file.name}`;
    const uploadTask = storageRef.child(`${folder}/${fileName}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        callback({
          status: "pending",
          error: "",
          progress,
          url: "",
        });
      },
      (error) => {
        console.log("uploadFile -> error", error);
        callback({
          status: "error",
          error: "Error subiendio archivo",
          progress: 0,
          url: "",
        });
      },
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        callback({
          status: "success",
          error: "",
          progress: 100,
          url: downloadURL,
        });
      }
    );
  } catch (error) {
    console.log("uploadFile -> error", error);
  }
}
