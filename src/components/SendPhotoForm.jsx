import { useState } from "react";

import { FaUpload } from "react-icons/fa";

export function SendPhotoForm({ handleShowImage }) {
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");
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

    try {
      const res = await fetch("http://localhost:8080/foto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 1000),
          photo: photo,
        }),
      });

      console.log("RES Status: ", res.status);
      let resJson = await res.json();
      console.log(resJson);

      if (res.status === 201) {
        setMessage("Foto enviada com sucesso!");
      } else {
        setMessage("Algum erro aconteceu.");
      }
      
    } catch (err) {
      console.log(err);
    }
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

      {message && (
        <div className="notification is-success mt-3">
          <button className="delete" onClick={() => setMessage("")}></button>
          {message}
        </div>
      )}
    </form>
  );
}
