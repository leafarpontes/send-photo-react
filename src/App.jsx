import { useState } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";

import { FaUpload } from "react-icons/fa";

function App() {
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");
  const [showImage, setShowImage] = useState("");
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

    setShowImage(URL.createObjectURL(fileFromInput));

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
    <>
      <div className="main mt-5">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Upload de Foto</p>
          </header>

          <div className="card-content">
            <div className="content">
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
                    <button
                      className="delete"
                      onClick={() => setMessage("")}
                    ></button>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="card-footer">
            <p className="card-footer-item subfooter-p">
              Desenvolvido por Rafael Pontes &copy; 2022
            </p>
          </div>

          <footer className="card-footer">
            <a
              href="https://www.linkedin.com/in/rafael-p/"
              target="_blank"
              rel="noreferrer"
              className="card-footer-item"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/leafarpontes"
              target="_blank"
              rel="noreferrer"
              className="card-footer-item"
            >
              GitHub
            </a>
          </footer>
        </div>
      </div>

      {showImage && (
        <div className="is-flex is-justify-content-center mt-4 mb-5 is-flex-direction-column is-align-items-center">
          <p className="mb-3">Foto a ser enviada:</p>
          <img className="" src={showImage} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
