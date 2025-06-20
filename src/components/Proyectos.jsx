import React, { useRef, useEffect } from "react";
import appEventos from "../assets/img/appeventos.jpg";
import autenticacion from "../assets/img/autenticacion.jpg";
import starwars from "../assets/img/starwarsblog.jpg";
import tictactoe from "../assets/img/tictactoe.jpg";
import reproductor from "../assets/img/reproductoraudio.jpg";
import saw from "../assets/img/saw.jpg";
import semaforo from "../assets/img/semaforodidactico.jpg";
import generador from "../assets/img/Generador.png";
import aleatorpoker from "../assets/img/aleatorpoker.jpg";
import jsmethodsort from "../assets/img/sortmethod.jpg";

const proyectos = [
  {
    titulo: "GESTOR Y ADMINISTRADOR DE EVENTOS",
    imagen: appEventos,
    enlace: "https://github.com/PRIMED587/WEBAPP-GESTION-DE-EVENTOS-PSC",
    descripcion:
      "Aplicación full stack para gestionar eventos, tareas y gastos en equipo. Utiliza React, Python, Flask, JWT, SQLAlchemy, Bootstrap, rutas dinamicas y consumo de API.",
  },
  {
    titulo: "SISTEMA DE AUTENTICACION",
    imagen: autenticacion,
    enlace:
      "https://github.com/PRIMED587/SISTEMA-DE-AUTENTICACION-JWT--JsonWebToken--PSC",
    descripcion:
      "Sistema de login y registro seguro con autenticación JWT. Backend en Flask y frontend en React con validaciones.",
  },
  {
    titulo: "BLOG STAR WARS",
    imagen: starwars,
    enlace: "https://github.com/PRIMED587/BLOG-DE-STARWARS-PSC",
    descripcion:
      "Sitio tipo blog con personajes, planetas y vehiculos de la saga Star Wars. Manejo de favoritos, rutas dinámicas y consumo de API.",
  },
  {
    titulo: "TIC- TAC-TOE GAME",
    imagen: tictactoe,
    enlace: "https://github.com/PRIMED587/TIC-TAC-TOE-GAME-PSC",
    descripcion:
      "Clásico juego de tres en raya con React, lógica de turnos, estados y detección de ganador.",
  },
  {
    titulo: "RETROGAME OST - REPRODUCTOR DE AUDIO",
    imagen: reproductor,
    enlace: "https://github.com/PRIMED587/REPRODUCTOR-DE-AUDIO-PSC",
    descripcion:
      "Reproductor de audio con estilo retro y botones de control personalizados usando React, efectos CSS, consumo de API entre otros.",
  },
  {
    titulo: "CONTADOR MACABRO - SAW",
    imagen: saw,
    enlace: "https://github.com/PRIMED587/PROYECTO-CONTADOR-SIMPLE-SAW-PSC",
    descripcion:
      "Contador con diseño inspirado en la saga SAW, efectos de sonido y estilo temático terror.",
  },
  {
    titulo: "SEMAFORO DIDACTICO",
    imagen: semaforo,
    enlace: "https://github.com/PRIMED587/PROYECTO-SEMAFORO-REACT-HOOKS-PSC",
    descripcion:
      "Simulación de un semáforo usando React Hooks y efectos, ideal para prácticas de lógica de estado.",
  },
  {
    titulo: "POKER CARD ALEATORIO",
    imagen: aleatorpoker,
    enlace: "https://github.com/PRIMED587/POKER-CARD-ALEATORIO-PSC",
    descripcion:
      "Generador de cartas al azar, mediante lógica en JavaScript y manipulación directa del DOM (Document Object Model) para renderizar dinámicamente cada carta en pantalla.",
  },
  {
    titulo: "ORDENAMIENTO DE CARTAS - JS SORT METHODS",
    imagen: jsmethodsort,
    enlace: "https://github.com/PRIMED587/MOTODOS-DE-ORDENAMIENTO-SORT-JS-PSC",
    descripcion:
      "Generador de cartas ordenadas segun en diferentes algoritmos clásicos de ordenamiento (Bubble Sort, Selection Sort, Quick Sort, etc-) orientado a reforzar conceptos de estructuras de datos, lógica algorítmica y eficiencia computacional.",
  },
  {
    titulo: "BASICO GENERADOR DE EXCUSAS",
    imagen: generador,
    enlace: "https://github.com/PRIMED587/BASICO-GENERADOR-DE-EXCUSAS-PSC",
    descripcion:
      "Disneylandia para procrastinadores! Un generador de excusas, el primer proyecto perfecto para un desarrollador principiante.",
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
