"use client";
import Image from "next/image";

const Header = () => {
  return (
    <section className="shadow-sm border-bottom ">
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Image src="/images/logo.svg" width={60} height={50} alt="logo" />
            <h2 className="fw-bold text-primary">Dr. Rivera y Asociados</h2>
          </div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a
                    className="nav-link active fs-5 px-3 hover-primary"
                    aria-current="page" 
                    href="#inicio"
                  >
                    Inicio
                  </a>
                  <a className="nav-link fs-5 px-3 hover-primary fw-2" href="#disponibilidad">
                    Disponibilidad
                  </a>
                  <a className="nav-link fs-5 px-3 hover-primary fw-2" href="#reservar-cita">
                    Reservar Cita
                  </a>
                  <a className="nav-link fs-5 px-3 hover-primary fw-2" href="#mis-citas">
                    Mis Citas
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
