import React from "react";
import "../../Estilos/Pagina_InicioCSS/encabezado.css"

//Importando contenido multimedia
import ImagenLogo from "../../Multimedia/Logo.png";

//Componente que tiene la lógica del encabezado que aparece en la página inicial
function SeccionEncabezado(){

    return(<div className="encabezado">

        <button className="encabezado__button" type="">Inicio</button>
        <button className="encabezado__button" type="">Menú</button>
        <img className="encabezado__img" src={ImagenLogo} alt="Imagen que representa el logo del restaurante japonés Kazoku"/>
        <button className="encabezado__button" type="">Nosotros</button>
        <button className="encabezado__button" type="">Ubicación</button>

    </div>);

}//Fin componente

export default SeccionEncabezado;