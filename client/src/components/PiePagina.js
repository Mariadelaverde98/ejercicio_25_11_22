/*Tipo: Funcional
Nombre: PiePagina
props: email=thebridge@gmail.com, cidudad="Madrid", direccion="Paseo de Recoletos 15"
Contenido: un footer con los datos de las props */
import React from 'react';

function PiePagina(props) {
    return (
        <footer>
            <p>Contacto:</p>

            <p>Email: {props.email}</p>
            <p>Direccion: {props.direccion}</p>
            <p>Cidudad: {props.ciudad}</p>

        </footer>
    )
}
export default PiePagina;