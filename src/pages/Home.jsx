import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import rigoImageUrl from "../assets/img/rigo-baby.jpg"; // reemplaza esto con tu imagen personal si deseas
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-image">
          <img
            src={rigoImageUrl}
            alt="Foto de Pascual Rivera"
            className="profile-photo"
          />
        </div>
        <div className="home-text">
          <h1 className="home-title">Pascual Rivera M.</h1>
          <p className="home-description">
            ¡Bienvenidos a mi portafolio! Este espacio virtual está diseñado
            para mostrar mi trabajo, habilidades y experiencia profesional. Aquí
            encontrarás una selección de mis mejores proyectos, los cuales
            reflejan mi pasión por el desarrollo de software. Te invito a
            explorar mi trabajo y conocer más sobre mi trayectoria.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/primed587/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/PRIMED587"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub />
            </a>
            <a href="mailto:priveram87@gmail.com" className="icon-link">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/56958270741"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link whatsapp-only"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
