import React from "react";
import "../../Estilos/Pagina_InicioCSS/Inicio.css" 

//Importando componentes secundarias
import SeccionEncabezado from "./Encabezado";
import SeccionIntroducion from "./Introduccion";

//Esta componente tiene la lógica de la página inicial del proyecto
function Pagina_Inicio(){

    return(<div className="inicio">

        <SeccionEncabezado/>
        <SeccionIntroducion/>

    </div>);

}//Fin componente

export default Pagina_Inicio;