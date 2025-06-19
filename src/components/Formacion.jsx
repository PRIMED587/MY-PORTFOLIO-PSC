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
            Aprende a crear sitios web con las mejores prácticas del diseño
            responsive y diversos lenguajes de programación. El programa cubre
            frontend, backend, bases de datos, procesos distribuidos y
            despliegue en la nube.
          </p>
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
          <span className="formacion-ubicacion">| Maturín, Venezuela</span>
          <p>
            La ingeniería de sistemas es un enfoque interdisciplinario que
            permite estudiar y comprender la realidad, con el propósito de
            implementar u optimizar sistemas complejos. Integra diversas
            disciplinas y grupos de especialidad, formando un proceso de
            desarrollo estructurado.
          </p>
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
