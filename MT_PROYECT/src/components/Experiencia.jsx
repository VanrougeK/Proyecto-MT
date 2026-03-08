import { useState } from "react";

export default function Experiencia() {
    const software = [
        {id: 1, name:"Software 1", img:"url de imagen aca"},
        {id: 2, name:"Software 2", img:"url de imagen aca"},
        {id: 3, name:"Software 3", img:"url de imagen aca"}
    ]

    return(
        <section>
            <h2>Experiencia</h2>
            <p>Luego describo aca tmb</p>

            <div>
                {software.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}