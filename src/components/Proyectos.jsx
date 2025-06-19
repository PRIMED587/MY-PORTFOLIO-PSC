import React, { useRef, useEffect } from "react";
import appEventos from "../assets/img/appeventos.jpg";
import autenticacion from "../assets/img/autenticacion.jpg";
import starwars from "../assets/img/starwarsblog.jpg";
import tictactoe from "../assets/img/tictactoe.jpg";
import reproductor from "../assets/img/reproductoraudio.jpg";
import saw from "../assets/img/saw.jpg";
import semaforo from "../assets/img/semaforodidactico.jpg";

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
  const marqueeRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const marquee = marqueeRef.current;

    const onMouseDown = (e) => {
      if (e.button !== 0) return; // Solo botón izquierdo
      isDragging.current = true;
      startX.current = e.pageX;
      scrollLeft.current = marquee.scrollLeft;
    };

    const onMouseLeave = () => {
      isDragging.current = false;
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX.current) * 1.5;
      marquee.scrollLeft = scrollLeft.current - walk;
    };

    marquee.addEventListener("mousedown", onMouseDown);
    marquee.addEventListener("mouseleave", onMouseLeave);
    marquee.addEventListener("mouseup", onMouseUp);
    marquee.addEventListener("mousemove", onMouseMove);

    return () => {
      marquee.removeEventListener("mousedown", onMouseDown);
      marquee.removeEventListener("mouseleave", onMouseLeave);
      marquee.removeEventListener("mouseup", onMouseUp);
      marquee.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="proyectos-container">
      <h2 className="proyectos-title">Mis Proyectos</h2>
      <div className="proyectos-marquee" ref={marqueeRef}>
        <div className="proyectos-track">
          {proyectos.map((proyecto, index) => (
            <div className="proyecto-card" key={index}>
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="proyecto-img"
              />
              <h3 className="proyecto-nombre">{proyecto.titulo}</h3>
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>
              <div className="proyecto-btn-container">
                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proyecto-btn"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
