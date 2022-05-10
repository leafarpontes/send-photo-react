import { useState } from "react";

import { FaUpload } from "react-icons/fa";

export function SendPhotoForm({ handleShowImage }) {
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");
  const [isUploadDone, setIsUploadDone] = useState("");
  const [fileName, setFileName] = useState("");

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileSelected = (e) => {
    const fileFromInput = e.target.files[0];

    setFileName(fileFromInput.name);

    handleShowImage(URL.createObjectURL(fileFromInput));

    getBase64(fileFromInput).then((data) => setPhoto(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/foto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000) + 1,
        photo: photo,
      }),
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          setIsUploadDone("ok");
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((jsonResponse) => {
        // do whatever you want with the JSON response
        console.log(jsonResponse);
      })
      .catch((error) => {
        // Handle the error
        setIsUploadDone("error");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="file has-name is-fullwidth">
        <label className="file-label">
          <input
            onChange={handleFileSelected}
            type="file"
            required
            className="file-input"
            name="resume"
          />
          <span className="file-cta">
            <span className="file-icon">
              <FaUpload />
            </span>
            <span className="file-label">Escolha uma foto...</span>
          </span>
          <span className="file-name">{fileName}</span>
        </label>
      </div>

      <div className="is-flex is-justify-content-center mt-4">
        <button className="button is-link" type="submit">
          Enviar foto
        </button>
      </div>

      {isUploadDone === "ok" ? (
        <div className="notification is-success mt-3">
          <button
            className="delete"
            onClick={() => setIsUploadDone("")}
          ></button>
          <p>Foto enviada com sucesso!</p>
        </div>
      ) : (
        isUploadDone === "error" && (
          <div className="notification is-danger mt-3">
            <button
              className="delete"
              onClick={() => setIsUploadDone("")}
            ></button>
            <p>Erro ao enviar foto!</p>
          </div>
        )
      )}
    </form>
  );
}
