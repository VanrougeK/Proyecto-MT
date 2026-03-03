import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Opiniones from "./components/Opiniones";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Servicios />
        <Opiniones />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;
