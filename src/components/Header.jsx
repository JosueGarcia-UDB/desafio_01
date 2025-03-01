"use client";
import Image from "next/image";

const Header = () => {
  return (
    <section className="shadow-sm border-bottom">
      <div className="container py-3">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center gap-3">
            <Image src="/images/logo.svg" width={60} height={50} alt="logo" />
            <h2 className="fw-bold text-primary m-0">Dr. Rivera y Asociados</h2>
          </div>

          {/* Menú */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 w-lg-auto mt-3 mt-lg-0">
            <div className="container-fluid">
              {/* Botón de menú en móvil */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Menú */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-center">
                  <li className="nav-item">
                    <a className="nav-link active fs-5 fw-bold" href="#inicio">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-5" href="#disponibilidad">
                      Disponibilidad
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-5" href="#reservar-cita">
                      Reservar Cita
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-5" href="#mis-citas">
                      Mis Citas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
