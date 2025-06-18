import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-logo-text" to="/">
          Full Stack <span className="orange-text">Developer</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formacion">Formación</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyectos">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acerca">Acerca de mí</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
