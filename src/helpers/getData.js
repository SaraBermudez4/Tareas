import { url } from "./url";

export const cargarDatos = async () => {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    return datos
}