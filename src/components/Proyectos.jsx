import React, { useRef } from "react";
import appEventos from "../assets/img/appeventos.jpg";
import autenticacion from "../assets/img/autenticacion.jpg";
import starwars from "../assets/img/starwarsblog.jpg";
import tictactoe from "../assets/img/tictactoe.jpg";
import reproductor from "../assets/img/reproductoraudio.jpg";
import saw from "../assets/img/saw.jpg";
import semaforo from "../assets/img/semaforodidactico.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const proyectos = [
  {
    titulo: "Gestor y Administrador de Eventos",
    imagen: appEventos,
    enlace: "https://github.com/PRIMED587/WEBAPP-GESTION-DE-EVENTOS-PSC",
    descripcion:
      "Aplicación full stack para gestionar eventos, tareas y gastos en equipo. Utiliza React, Python, Flask, SQLAlchemy y Bootstrap.",
  },
  {
    titulo: "Sistema de Autenticación",
    imagen: autenticacion,
    enlace:
      "https://github.com/PRIMED587/SISTEMA-DE-AUTENTICACION-JWT--JsonWebToken--PSC",
    descripcion:
      "Sistema de login y registro seguro con autenticación JWT. Backend en Flask y frontend en React con validaciones.",
  },
  {
    titulo: "BLOG Star Wars",
    imagen: starwars,
    enlace: "https://github.com/PRIMED587/BLOG-DE-STARWARS-PSC",
    descripcion:
      "Sitio tipo blog con personajes y planetas de Star Wars. Manejo de favoritos, rutas dinámicas y consumo de API.",
  },
  {
    titulo: "TIC- TAC-TOE GAME",
    imagen: tictactoe,
    enlace: "https://github.com/PRIMED587/TIC-TAC-TOE-GAME-PSC",
    descripcion:
      "Clásico juego de tres en raya con React, lógica de turnos, estados y detección de ganador.",
  },
  {
    titulo: "Reproductor de Audio RETROGAME",
    imagen: reproductor,
    enlace: "https://github.com/PRIMED587/REPRODUCTOR-DE-AUDIO-PSC",
    descripcion:
      "Reproductor de audio con estilo retro y botones de control personalizados usando React y efectos CSS.",
  },
  {
    titulo: "Contador Macabro SAW",
    imagen: saw,
    enlace: "https://github.com/PRIMED587/PROYECTO-CONTADOR-SIMPLE-SAW-PSC",
    descripcion:
      "Contador con diseño inspirado en la saga SAW, efectos de sonido y estilo temático terror.",
  },
  {
    titulo: "Semáforo Didáctico",
    imagen: semaforo,
    enlace: "https://github.com/PRIMED587/PROYECTO-SEMAFORO-REACT-HOOKS-PSC",
    descripcion:
      "Simulación de un semáforo usando React Hooks y efectos, ideal para prácticas de lógica de estado.",
  },
];

const Proyectos = () => {
  const trackRef = useRef();

  const scroll = (direction) => {
    const { current } = trackRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="proyectos-container">
      <h2 className="proyectos-title">Mis Proyectos</h2>
      <div className="proyectos-marquee">
        <div className="proyectos-controls">
          <button className="control-btn" onClick={() => scroll("left")}>
            {" "}
            <FaChevronLeft />{" "}
          </button>
          <button className="control-btn" onClick={() => scroll("right")}>
            {" "}
            <FaChevronRight />{" "}
          </button>
        </div>
        <div className="proyectos-track" ref={trackRef}>
          {proyectos.map((proyecto, index) => (
            <div className="proyecto-card" key={index}>
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="proyecto-img"
              />
              <h3 className="proyecto-nombre">{proyecto.titulo}</h3>
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="proyecto-btn"
              >
                Ver en GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
