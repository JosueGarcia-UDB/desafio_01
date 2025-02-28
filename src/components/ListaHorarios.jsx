"use client"
import { useState } from "react";
import horarios from "../app/data/horarios";

const ListaHorarios = () => {
  const [consultorioSeleccionado, setConsultorioSeleccionado] = useState("consultorio1");

  return (
    <div className="container mt-4">
      <h2 className="text-primary-emphasis text-center pb-3">Horarios disponibles</h2>

      {/* Encabezado para seleccionar consultorio */}
      <div className="d-flex gap-4">
        <button
          className={`flex-grow-1 btn ${consultorioSeleccionado === "consultorio1" ? "btn-primary fw-bold" : "btn-light border-secondary"}`}
          onClick={() => setConsultorioSeleccionado("consultorio1")}
        >
          Consultorio 1
        </button>
        <button
          className={`flex-grow-1 btn ${consultorioSeleccionado === "consultorio2" ? "btn-primary fw-bold" : "btn-light border-secondary"}`}
          onClick={() => setConsultorioSeleccionado("consultorio2")}
        >
          Consultorio 2
        </button>
      </div>

      {/* Horarios */}
      <div className="row mt-3">
        {horarios.map((horario, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-2">
            <div
              className={`p-3 border rounded text-center fw-bold ${
                horario[consultorioSeleccionado] === "Ocupado" ? "bg-danger text-white" : "bg-success bg-opacity-25"
              }`}
            >
              {horario.hora}
              <div className="small">{horario[consultorioSeleccionado]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Información */}
      <div className="mt-4 p-3 bg-light rounded mb-5">
        <h5 className="text-primary fw-bold">Información:</h5>
        <ul className="mb-0">
          <li>Los horarios en <span className="text-success fw-bold">verde</span> están disponibles para reservar.</li>
          <li>Los horarios en <span className="text-danger fw-bold">rojo</span> ya están ocupados.</li>
          <li>Las citas tienen una duración de 30 minutos.</li>
          <li>Para reservar, vaya a la sección "Reservar Cita".</li>
        </ul>
      </div>
    </div>
  );
};

export default ListaHorarios;