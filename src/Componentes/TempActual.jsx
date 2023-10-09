import "../Estilos/TempActual.css";
import sol from "../Imagenes/sol.webp";

function TempActual (){
    return (
    <div className="temp-actual">
        <p id="fecha">Lunes, </p>
        <p id="hora">17:00 hs</p>
        <img src={sol} id="sol"></img>
        <p id="temperatura"> 20°<sup>c</sup></p>
    </div>  
    )
}

export default TempActual;