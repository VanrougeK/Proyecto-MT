import { useState } from "react";

export default function Galeria() {
    const items = [
        {id: 1, info: "Dibujo 1", img:"/img1.png"}, 
        {id: 2, info: "Dibujo 2", img:"/img2.png"}, 
        {id: 3, info: "Dibujo 3", img:"/img3.png"}]
    return(
        <section>
            <h2>Galeria</h2>

            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.img} />
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}