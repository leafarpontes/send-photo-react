import { SendPhotoForm } from "./SendPhotoForm";

import { BsLinkedin, BsGithub } from "react-icons/bs";

export function Card({ handleShowImage }) {

  return (
    <div className="main mt-5">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Upload de Foto</p>
          </header>

          <div className="card-content">
            <div className="content">
              <SendPhotoForm handleShowImage={handleShowImage} />
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
              <BsLinkedin className="mr-2 social-icon" /> Linkedin
            </a>
            <a
              href="https://github.com/leafarpontes"
              target="_blank"
              rel="noreferrer"
              className="card-footer-item"
            >
              <BsGithub className="mr-2 social-icon" /> GitHub
            </a>
          </footer>
        </div>
      </div>
  )
}