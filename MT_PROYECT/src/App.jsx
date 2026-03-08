import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import Experiencia from "./components/Experiencia";

export default function App() {

  return (
    <div>
      <Navbar />

        <Hero />
        <Galeria />
        <Experiencia />
        <Servicios />
        <Contacto />
    </div>
  );
}


