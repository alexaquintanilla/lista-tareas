import './App.css';
import laboratoriaLogo from './imagenes/Laboratoria-Logo.webp';
import ListaDeTareas from './componentes/Lista DeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='laboratoria-logo-contenedor'>
        <img 
        src={laboratoriaLogo}
        className='laboratoria-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
