import "../Estilos/Destacados.css";

function Destacados (){
    return (
    <div>
        <h2 className="titulo">Destacados</h2>
        <ul className="extras">
            <li id="tituloDestacado">INDICE UV <p className="dato">6</p></li>
            <li id="tituloDestacado">VIENTO <p className="dato">11.12 km/h</p></li>
            <li id="tituloDestacado">AMANECER & ATARDECER <p className="dato">6:35 AM</p><p className="dato">5:42 PM</p></li>
            <li id="tituloDestacado">HUMEDAD <p className="dato">12% Normal</p></li>
            <li id="tituloDestacado">VISIBILIDAD<p className="dato">6.1 km</p></li>
            <li id="tituloDestacado">CALIDAD DEL AIRE <p className="dato">105</p></li>
        </ul>
    </div>
    )
}

export default Destacados;