import React from "react";

const Formacion = () => {
  return (
    <div className="formacion-container">
      <div className="formacion-box">
        <h2 className="formacion-title mb-5">Formación Académica</h2>
        <div className="formacion-item">
          <h3>FULL STACK DEVELOPER - 4Geeks Academy</h3>
          <span className="formacion-fecha">
            04/2025 – 06/2025 | Santiago, Chile{" "}
          </span>
          <p>
            Participé en un programa intensivo tipo bootcamp enfocado en el
            desarrollo web Full Stack, donde adquirí habilidades prácticas y
            teóricas en programación, bases de datos, desarrollo frontend y
            backend, además de metodologías ágiles. Durante la formación:{" "}
          </p>
          <ul>
            <li>
              Desarrollé aplicaciones completas utilizando JavaScript, Python,
              HTML5 y CSS3, aplicando buenas prácticas de código y estructuras
              escalables.
            </li>
            <li>
              Utilicé frameworks y librerías como React, Flask, Bootstrap,
              SQLAlchemy, y JWT para construir interfaces modernas y APIs
              robustas.
            </li>
            <li>
              Implementé control de versiones y flujos de trabajo colaborativos
              usando Git, GitHub y Docker.
            </li>
            <li>
              Realicé pruebas unitarias con Jest y utilicé herramientas modernas
              como Vite para mejorar la experiencia de desarrollo.
            </li>
            <li>
              Apliqué metodologías ágiles (Scrum) en proyectos colaborativos,
              simulando entornos laborales reales con gestión de tareas,
              reuniones diarias y ciclos de entrega continua.
            </li>
          </ul>
          <a
            href="https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack?utm_source=google&utm_medium=cpc&utm_campaign=21729300168&utm_content=169428593002&utm_term=bootcamp%20programador&gad_source=1&gad_campaignid=21729300168&gbraid=0AAAAACUEqkq9wg5GTw1jjybbQOwyp4Y9R&gclid=CjwKCAjwx8nCBhAwEiwA_z__0-d8jseng_sVTQDZD_kQ8RJQ5Ed60JDMn4fj1WU-6FT67_n4jU37kRoC9okQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className="formacion-link"
          >
            Ver programa de estudios
          </a>
        </div>
        <div className="formacion-item">
          <h3>
            INGENIERÍA DE SISTEMAS - Instituto Universitario Santiago Mariño
          </h3>
          <span className="formacion-fecha">04/2004 – 11/2010</span>
          <span className="formacion-ubicacion">| Monagas, Venezuela</span>
          <p>
            Formación universitaria orientada al análisis, diseño, desarrollo y
            evaluación de sistemas informáticos y procesos organizacionales.
            Durante la carrera se adquirieron competencias en:
          </p>
          <ul>
            <li>
              Programación estructurada y orientada a objetos (Python, C, Java)
              y manejo avanzado de estructuras de datos.
            </li>
            <li>
              Diseño y gestión de bases de datos relacionales y no relacionales,
              optimizando consultas y estructuras de datos.
            </li>
            <li>
              Sistemas operativos, organización del computador y electrónica
              digital.
            </li>
            <li>
              Conocimientos en estadística, investigación de operaciones,
              economía e ingeniería económica, integrando aspectos técnicos y
              administrativos.
            </li>
            <li>
              Participación en actividades de servicio comunitario, prácticas
              profesionales y trabajo de grado, enfocados en la solución de
              problemas reales.
            </li>
          </ul>
          <a
            href="https://www.dropbox.com/scl/fi/48m18vkw3uomj867v5hn3/Pensum-de-estudios-IUPSM.pdf?rlkey=94vbnw21mde7yysnav11173nv&st=5iyunggr&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="formacion-link"
          >
            Ver programa de estudios
          </a>
        </div>
      </div>
    </div>
  );
};

export default Formacion;
