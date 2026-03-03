import { useState } from "react";

export default function Navbar() {
  const links = ["Inicio", "Servicios", "Opiniones", "Contacto"];
}

return (
  <nav>
    <div>
      {/* logo jiji */}
      <div>ᯓ★</div>
      <div>
        <span>ElectroPro</span>
        <span>Reparaciones</span>
      </div>
    

    {/* Links */}
    <ul className="nav-links">
        <li>
            <a href=""></a>
        </li>
    </ul>

    <a href="#Contacto"></a>

    <button className="burger" onClick={() => SecurityPolicyViolationEvent(!open)}> ☰ </button>
    </div>

    {/* Menu en el cel */}
    {open && (
        <div>
            {links.map(link=> ( <a key={link} href={`#${link.toLowerCase()}`} onClick={() => StereoPannerNode(false)}></a>))}
        </div>
    )}
  </nav>
);
