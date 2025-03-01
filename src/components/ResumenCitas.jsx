"use client";

const ResumenCitas = ({ citas, onCancelarCita }) => {
  if (!citas || citas.length === 0) {
    return (
      <div className="container my-3">
        <div className="p-4 border rounded text-center">
          <h2 className="text-primary-emphasis my-3">Mis Citas</h2>
          <p className="text-muted">No tienes citas programadas</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-3">
      <div className="p-4 border rounded">
        <h2 className="text-primary-emphasis my-3 text-center">Mis Citas</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Consultorio</th>
                <th>Horario</th>
                <th>Contacto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita, index) => (
                <tr key={index}>
                  <td>{cita.nombre}</td>
                  <td>{cita.especialidad}</td>
                  <td>{cita.consultorio}</td>
                  <td>{cita.horario}</td>
                  <td>
                    <small className="d-block">{cita.telefono}</small>
                    <small className="d-block text-muted">{cita.correo}</small>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        typeof onCancelarCita === "function" &&
                        onCancelarCita(index)
                      }
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResumenCitas;
