import React from "react";

export const HomeFooter = () => (
  <footer className="custom-footer py-4 mt-auto text-center">
    <div className="container">
      <p className="footer-title">15/05/1987</p>
      <p className="footer-subtitle">
        Construyendo experiencias digitales con pasión por el código.
      </p>

      <p className="footer-copy">&copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);
