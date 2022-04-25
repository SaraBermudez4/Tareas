import React, { useState } from 'react'
import { url as urlHelper } from '../helpers/url';
export const AgregarTarea = () => {

    const [tarea, setTarea] = useState({
        url: '',
        nombre: '',
        descripcion: ''
    });

    const { url, nombre, descripcion } = tarea

    const handleChange = ({ target }) => {
        setTarea({
            ...tarea,
            [target.name]: target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        agregarDatos()
    }

    const agregarDatos = async () => {
        await fetch(urlHelper, {
            method: 'POST',
            body: JSON.stringify(tarea),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
    }

    return (
        <div>
            <h3 className="text-center"> Agregar Tareas </h3>

            <form className="form-group" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control "
                    placeholder="Url"
                    name="url"
                    onChange={handleChange}
                    value={url}
                />

                <input
                    type="text"
                    className="form-control mt-2"
                    name="nombre"
                    autoComplete="off"
                    placeholder="Nombre Tarea"
                    value={nombre}
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mt-2"
                    autoComplete="off"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                >
                </textarea>

                <div className="d-grid gap-2 mx-auto mt-2">
                    <button
                        type="submit"
                        className="btn btn-dark">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}
