import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false)
  const links = ["Inicio", "Servicios", "Opiniones", "Contacto"];

return (
  <nav className="fixed top-0 left-0 right-0 z-100 bg-white/92 backdrop-blur-md border-b-2 border-[#f0e8d8] font-sans">
    <div>
      {/* logo jiji */}
      <div>ᯓ★</div>
      <div>
        <span>ElectroPro</span>
        <span>Reparaciones</span>
      </div>

      {/* Links */}
      <ul className="nav-links">
        {links.map((link) => (
          <li>
            <a href={`#${link.toLowerCase()}`}> {link} </a>
          </li>
        ))}
      </ul>

      <a href="#Contacto">Cotizar</a>

      <button
        className="burger"
        onClick={() => SecurityPolicyViolationEvent(!open)}
      >☰</button>
    </div>

    {/* Menu en el cel */}
    {open && (
      <div>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => StereoPannerNode(false)}
          >{link}</a>
        ))}
      </div>
    )}
  </nav>
);
}
