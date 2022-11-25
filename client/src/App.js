import './App.css';
import Cabeceras from './components/Cabeceras';
import Formulario from './components/Formulario';
import PiePagina from './components/PiePagina';

function App() {
  return (
    <div className="App">
      <Cabeceras titulo1="Título principal" titulo2="Subtítulo" titulo3="Tercer título"/>
      <Formulario></Formulario>
      <PiePagina email="thebridge@gmail.com" ciudad="Madrid" direccion="Paseo de Recoletos 15"></PiePagina>
    </div>
  );
}

export default App;
