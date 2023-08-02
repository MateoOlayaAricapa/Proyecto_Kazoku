import React, { useState } from "react";
import "../../Estilos/Pagina_PedidoCSS/botonmenu.css";

//Esta componente tiene la lógica que muestra un botón(div) de un menú del restaurante
function BotonMenuPedido({DatoMenu, BotonSeleccionado, onBotonSeleccionado, colorFondo, indice}){

    return(<div className="BotonMenu" style={{background:BotonSeleccionado ? "#F0A5A9" : colorFondo}} onClick={() => onBotonSeleccionado(indice)}>
        
        <img src={DatoMenu.imagen} alt="Imagen que representa una comida del menú"/>
        <h3>{DatoMenu.titulo}</h3>

    </div>)

}//Fin componente

export default BotonMenuPedido;