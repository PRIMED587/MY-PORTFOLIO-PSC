import React from "react";

export const Footer = () => (
  <footer className="custom-footer py-4 mt-auto text-center">
    <div className="container">
      <p className="footer-title">Pascual Rivera | Full Stack Developer</p>
      <p className="footer-subtitle">
        Construyendo experiencias digitales con pasión por el código.
      </p>

      <div className="footer-icons mt-3 mb-2">
        <a href="https://github.com/PRIMED587" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/primed587/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:priveram87@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://wa.me/56958270741"
          target="_blank"
          rel="noreferrer"
          title="Contáctame por WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <p className="footer-copy">&copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);
