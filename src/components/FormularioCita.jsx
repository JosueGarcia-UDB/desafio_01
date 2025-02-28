"use client";
import React, { useState } from "react";
import { horarios } from "../app/data/horarios";
import { especialidades } from "../app/data/especialidades";

const FormularioCita = ({ onAgregarCita }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    especialidad: "",
    consultorio: "Consultorio 1",
    horario: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpiar error al cambiar el valor
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const seleccionarHorario = (hora) => {
    setFormData({
      ...formData,
      horario: hora,
    });
  };

  const seleccionarConsultorio = (consultorio) => {
    setFormData({
      ...formData,
      consultorio,
      horario: null, // Resetear horario al cambiar consultorio
    });
  };

  const validarFormulario = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{8}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingrese un número de teléfono válido (10 dígitos)";
    }

    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = "Ingrese un correo electrónico válido";
    }
    if (!formData.especialidad) {
      newErrors.especialidad = "Seleccione una especialidad";
    }

    if (!formData.horario) {
      newErrors.horario = "Seleccione un horario";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const confirmarCita = () => {
    if (validarFormulario()) {
      if (typeof onAgregarCita === "function") {
        onAgregarCita(formData);

        // Resetear el formulario
        setFormData({
          nombre: "",
          telefono: "",
          correo: "",
          especialidad: "",
          consultorio: "Consultorio 1",
          horario: null,
        });
      } else {
        console.error("onAgregarCita no es una función o no está definida");
      }
    }
  };

  // Filtrar horarios disponibles según el consultorio seleccionado
  const horariosDisponibles = horarios.filter(
    (horario) =>
      horario[
        formData.consultorio === "Consultorio 1"
          ? "consultorio1"
          : "consultorio2"
      ] !== "Ocupado"
  );

  return (
    <div className="container">
      <h2 className="text-primary-emphasis my-5 text-center">
        Reservar una cita
      </h2>
      <div className="row">
        {/* Columna de horarios - Lado izquierdo */}
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="p-4 border rounded h-100">
            <h4 className="text-primary mb-3">Horarios Disponibles</h4>

            <div className="mb-3">
              <div className="btn-group w-100">
                <button
                  type="button"
                  className={`btn ${
                    formData.consultorio === "Consultorio 1"
                      ? "btn-primary"
                      : "btn-light"
                  }`}
                  onClick={() => seleccionarConsultorio("Consultorio 1")}
                >
                  Consultorio 1
                </button>
                <button
                  type="button"
                  className={`btn ${
                    formData.consultorio === "Consultorio 2"
                      ? "btn-primary"
                      : "btn-light"
                  }`}
                  onClick={() => seleccionarConsultorio("Consultorio 2")}
                >
                  Consultorio 2
                </button>
              </div>
            </div>

            <div className="d-flex flex-wrap">
              {horariosDisponibles.map((horario) => (
                <button
                  key={horario.hora}
                  type="button"
                  className={`btn m-1 ${
                    formData.horario === horario.hora
                      ? "btn-success"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => seleccionarHorario(horario.hora)}
                >
                  {horario.hora}
                </button>
              ))}
            </div>

            {errors.horario && (
              <div className="text-danger mt-2 small">{errors.horario}</div>
            )}

            <div className="mt-4 p-3 bg-light rounded">
              <h6 className="text-primary fw-bold">Información:</h6>
              <ul className="mb-0 small">
                <li>Seleccione un consultorio y horario disponible</li>
                <li>Las citas tienen una duración de 30 minutos</li>
                <li>Llegue 10 minutos antes de su cita</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Formulario - Lado derecho */}
        <div className="col-md-7">
          <div className="p-4 border rounded">
            <h4 className="text-primary mb-3">Información Personal</h4>

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ingrese su nombre completo"
              />
              {errors.nombre && (
                <div className="invalid-feedback">{errors.nombre}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                className={`form-control ${
                  errors.telefono ? "is-invalid" : ""
                }`}
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                placeholder="Ingrese su número de teléfono"
              />
              {errors.telefono && (
                <div className="invalid-feedback">{errors.telefono}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className={`form-control ${errors.correo ? "is-invalid" : ""}`}
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                placeholder="Ingrese su correo electrónico"
              />
              {errors.correo && (
                <div className="invalid-feedback">{errors.correo}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="especialidad" className="form-label">
                Especialidad Médica
              </label>
              <select
                id="especialidad"
                name="especialidad"
                className={`form-select ${
                  errors.especialidad ? "is-invalid" : ""
                }`}
                value={formData.especialidad}
                onChange={handleInputChange}
              >
                <option value="">Seleccione una especialidad</option>
                {especialidades.map((esp) => (
                  <option key={esp.id} value={esp.nombre}>
                    {esp.nombre}
                  </option>
                ))}
              </select>
              {errors.especialidad && (
                <div className="invalid-feedback">{errors.especialidad}</div>
              )}
            </div>

            <div className="d-grid">
              <button
                type="button"
                className="btn btn-success py-2"
                onClick={confirmarCita}
              >
                Confirmar Reserva
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioCita;
