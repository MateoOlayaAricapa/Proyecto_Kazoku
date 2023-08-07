import React from "react";
import "../../Estilos/Pagina_InicioCSS/encabezado.css"

//Importando contenido multimedia
import ImagenLogo from "../../Multimedia/Logo.png";

//Componente que tiene la lógica del encabezado que aparece en la página inicial
function SeccionEncabezado(){

    return(<div className="encabezado">

        <a href="#section__intro" className="encabezado__button" type="">Inicio</a>
        <a href="#section__menu" className="encabezado__button" type="">Menú</a>
        <img className="encabezado__img" src={ImagenLogo} alt="Imagen que representa el logo del restaurante japonés Kazoku"/>
        <a href="#section__intro" className="encabezado__button" type="">Nosotros</a>
        <a href="#section__ubication" className="encabezado__button" type="">Ubicación</a>

    </div>);

}//Fin componente

export default SeccionEncabezado;