import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Estilos/Pagina_InicioCSS/tarjetacomidamenu.css"

//Importando imágenes
import ImagenSushi from "../../Multimedia/Sushi.png";

//Esta componente tiene la lógica de mostrar información de un menú en particular
function TarjetaComida({titulo, imagen, descripcion, IDmenu}){
    
    const navegacion = useNavigate();

    return(<div className="tarjetaMenu" onClick={()=> navegacion(`/pedido/${IDmenu}`)}>
        
        <div className="tarjetaMenu__imagen">
            
            <img src={imagen} alt="Imagen que representa un sushi"/>

        </div>

        <h2 className="tarjetaMenu__titulo">{titulo}</h2>

        <div className="tarjetaMenu__info">
            <p>{descripcion}</p>
        </div>

    </div>);

}//Fin componente

export default TarjetaComida;