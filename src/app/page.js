"use client";
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaHorarios from "../components/ListaHorarios";
import Information from "../components/Information"
import FormularioCita from "../components/FormularioCita"
import ResumenCitas from '../components/ResumenCitas';
import { horariosIniciales } from './data/horariosIniciales'; //Archivo de horarios

export default function Home() {
  // Estado global para las citas
  const [citas, setCitas] = useState([]);
  // Estado global para los horarios
  const [horarios, setHorarios] = useState(horariosIniciales);

  // Función para actualizar los horarios basado en las citas
  const actualizarHorarios = (citasActuales) => {
    // Comenzar con todos los horarios disponibles
    const nuevosHorarios = horariosIniciales.map(horario => ({ ...horario }));

    // Marcar horarios como ocupados según las citas existentes
    citasActuales.forEach(cita => {
      const horarioIndex = nuevosHorarios.findIndex(h => h.hora === cita.horario);
      if (horarioIndex !== -1) {
        const consultorioKey = cita.consultorio === "Consultorio 1" ? "consultorio1" : "consultorio2";
        nuevosHorarios[horarioIndex][consultorioKey] = "Ocupado";
      }
    });

    setHorarios(nuevosHorarios);
  };

  // Actualizar horarios cuando cambian las citas
  useEffect(() => {
    actualizarHorarios(citas);
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const cancelarCita = (index) => {
    if (!confirm("¿Desea eliminar esta cita?")) return
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">

        {/*Sección de CardCitas y especialidades*/}
        <section className="background" id="inicio">
          <Information />
        </section>
        {/*Sección de la lista de horarios*/}
        <section className="background" id="disponibilidad">
          <ListaHorarios horarios={horarios} />
        </section>
        {/*Sección para reservar una cita*/}
        <section className="background" id="reservar-cita">
          <FormularioCita onAgregarCita={agregarCita} horarios={horarios} />
        </section>
        {/*Sección de todas mis citas*/}
        <section className="background" id="mis-citas">
          <ResumenCitas citas={citas} onCancelarCita={cancelarCita} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
