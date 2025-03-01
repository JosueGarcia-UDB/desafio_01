import {
  IconCalendarWeek,
  IconClock12,
  IconHistory,
} from "@tabler/icons-react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCitas from "../components/CardCitas";
import { especialidades } from "@/app/data/especialidades";

const Information = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center text-primary mt-4 p-2">
          ¡Hola! Bienvenido a Dr. Rivera y Asociados
        </h1>
        <p className="fs-4 fw-light w-75 text-center">
          Sistema de gestión de citas médicas para nuestros dos consultorios.{" "}
          <strong>Reserve, administre y cancele</strong> sus citas de manera
          fácil y rápida.
        </p>
      </div>

      <div
        className="container d-grid gap-3 py-2"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        <CardCitas
          color="warning"
          icon={<IconCalendarWeek size={35} />}
          title="Ver Disponibilidad"
          description="Consulte los horarios disponibles en nuestros dos consultorios para programar su cita."
          textButton="Ver horarios"
          link="disponibilidad"
        />
        <CardCitas
          color="success"
          icon={<IconClock12 size={35} />}
          title="Reservar Cita"
          description="Reserve una cita seleccionando la fecha, hora y especialidad médica de su preferencia."
          textButton="Agendar cita"
          link="reservar-cita"
        />
        <CardCitas
          color="info"
          icon={<IconHistory size={35} />}
          title="Mis Citas"
          description="Consulte todas las citas programadas en nuestros dos consultorios."
          textButton="Ver citas"
          link="mis-citas"
        />
      </div>
      <div className="container pt-5">
        <h2 className="text-center text-primary-emphasis py-2">
          Nuestras especialidades
        </h2>
        <div className="row mb-3">
          {especialidades.map((especialidad) => (
            <div key={especialidad.id} className="col-md-3 p-2">
              <div className="p-3 mt-2 bg-info-subtle text-primary text-center rounded fw-bold">
                {especialidad.nombre}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
