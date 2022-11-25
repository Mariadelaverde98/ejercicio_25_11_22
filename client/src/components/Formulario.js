/*
Tipo: Clase
Nombre: Formulario
states: email y pass
Contenido: formulario de login
Comportamiento: Un console.log cuando cambien los estados con el contenido
*/
import React from 'react';

class Formulario extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: "", pass: "" };
    }

    muestraEmail(email) {
        this.setState({email});
        console.log(email);
    }
    
    muestraPassword(pass){
        this.setState({pass});
        console.log(pass);
    }

    render() {
        return (
            <form>
                <input placeholder='Email' type="text" onChange={(e) => this.muestraEmail(e.target.value)} />
                <input placeholder='Password' type="password" onChange={(e) =>this.muestraPassword(e.target.value)} />
            </form>
        );
    }
}

export default Formulario;