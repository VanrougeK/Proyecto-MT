import { useState } from "react";

export default function Galeria() {
    const items = [
        {id: 1, info: "Ibis Paint X", img:"Enlace de img"}, 
        {id: 2, info: "Clip Paint Studio", img:"Enlace de img"}, 
        {id: 3, info: "Paint", img:"Enlace de img"}]
    return(
        <section>
            <h2>Galeria</h2>

            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt={img.info} />
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}