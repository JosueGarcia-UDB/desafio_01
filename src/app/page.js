"use client";
import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaHorarios from "../components/ListaHorarios";
import Information from "../components/Information"
import FormularioCita from "../components/FormularioCita"
import ResumenCitas from '../components/ResumenCitas';


export default function Home() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const cancelarCita = (index) => {
    if(!confirm("¿Desea eliminar esta cita?")) return
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">

        {/*Sección de CardCitas y especialidades*/}
        <section id="inicio" style={{ backgroundImage: "url(/images/background.png)", backgroundRepeat: "no-repeat", backgroundPositionX: "rigth" }}>
          <Information />
        </section>
        {/*Sección de la lista de horarios*/}
        <section id="disponibilidad" style={{ backgroundImage: "url(/images/background.png)", backgroundRepeat: "no-repeat" }}>
          <ListaHorarios />
        </section>
        {/*Sección para reservar una cita*/}
        <section id="reservar-cita">
          <FormularioCita onAgregarCita={agregarCita} />
        </section>
        {/*Sección de Mis Citas*/}
        <section id="mis-citas">
          <ResumenCitas citas={citas} onCancelarCita={cancelarCita}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}
