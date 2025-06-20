import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaBootstrap,
  FaGithub,
  FaFontAwesome,
  FaLock,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiFlask, SiVite, SiJest, SiSqlalchemy } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-box">
        <h2 className="skills-title">Habilidades</h2>
        <p className="skills-description">
          Desarrollador Full Stack siempre en formación con conocimientos en
          tecnologías de frontend y backend. Capaz de trabajar en el diseño de
          interfaces web, desarrollo de funcionalidades, conexión con bases de
          datos y despliegue de aplicaciones. Familiarizado con herramientas
          modernas de desarrollo, buenas prácticas y control de versiones. Me
          interesa seguir aprendiendo y mejorar continuamente mis habilidades en
          la creación de soluciones funcionales y organizadas.
        </p>

        {/* Lenguajes */}
        <div className="skills-section">
          <h3 className="skills-subtitle">Lenguajes de Programación</h3>
          <ul className="skills-list">
            <li>
              <FaHtml5 /> HTML5
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <FaJs /> JavaScript
            </li>
            <li>
              <FaPython /> Python
            </li>
            <li>
              <SiSqlalchemy /> SQL / SQLAlchemy
            </li>
          </ul>
        </div>

        {/* Frameworks y Librerías */}
        <div className="skills-section">
          <h3 className="skills-subtitle">Frameworks y Librerías</h3>
          <ul className="skills-list">
            <li>
              <FaReact /> React
            </li>
            <li>
              <FaBootstrap /> Bootstrap
            </li>
            <li>
              <SiFlask /> Flask
            </li>
            <li>
              <FaLock /> JWT (JSON Web Token)
            </li>
            <li>
              <SiJest /> Jest
            </li>
            <li>
              <SiVite /> Vite
            </li>
            <li>
              <FaFontAwesome /> Font Awesome
            </li>
          </ul>
        </div>

        {/* Herramientas */}
        <div className="skills-section">
          <h3 className="skills-subtitle">
            Herramientas y Control de Versiones
          </h3>
          <ul className="skills-list">
            <li>
              <FaGitAlt /> Git
            </li>
            <li>
              <FaGithub /> GitHub
            </li>
            <li>
              <FaDocker /> Docker
            </li>
          </ul>
        </div>

        {/* Metodologías */}
        <div className="skills-section">
          <h3 className="skills-subtitle">Metodologías</h3>
          <ul className="skills-list">
            <li>
              <FaProjectDiagram /> Metodologías Ágiles (Scrum)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
