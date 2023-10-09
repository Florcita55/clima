
import Destacados from './Componentes/Destacados';
import TempActual from './Componentes/TempActual';
import PronosticoDeHoy from './Componentes/PronosticoDeHoy';
import MaxMin from './Componentes/MaxMin';

import './App.css';


function App() {
  return (
    <div className="clima">
      <TempActual ></TempActual>
      <PronosticoDeHoy></PronosticoDeHoy>
      <MaxMin></MaxMin>
      <Destacados></Destacados>
    </div>
  );
}

export default App;
