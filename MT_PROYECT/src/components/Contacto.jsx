import { useState } from "react";

export default function Contacto() {
    const [form, setForm] = useState ({ email:"", details:"", service:""})
    const handleChange = e => setForm ({...form, [e.target.name]: e.target.value})
    const handleSubmit = e => {e.preventDefault(); console.log(form)}

    return(
        <section>
            <h2>Contacto</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Correo electronico:</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                    
                    <label>Correo electronico:</label>
                        <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Opciones</option>
                        <option value="op1">Icono de perfil</option>
                        <option value="op2">Banner</option>
                        <option value="op3">Pareja</option>
                        <option value="op4">Fecha especial</option>
                        </select>
                    </div>

                    <div>
                        <label>Detalles del contacto:</label>
                        <textarea name="details" value={form.details} onChange={handleChange} placeholder="Detalles del servicio a solicitar"></textarea>
                    </div>
                </div>

                <button type="submit">Confirmar solicitud</button>
            
            </form>
        </section>
    )
}