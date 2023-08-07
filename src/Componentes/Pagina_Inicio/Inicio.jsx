import React, { useEffect, useState, useContext } from "react";
import "../../Estilos/Pagina_InicioCSS/Inicio.css" 

//Importando componentes secundarias
import SeccionEncabezado from "./Encabezado";
import SeccionIntroducion from "./Introduccion";
import SeccionMenu from "./Menu";
import SeccionUbicacionRestaurante from "./Ubicacion";

//Importando objeto de Context API
import { DataContexto } from "../../Contexto/contextoAPI";

//Esta componente tiene la lógica de la página inicial del proyecto
function Pagina_Inicio(){
    
    //Utilizando el contextAPI
    const {setListaDatosMenu} = useContext(DataContexto);

    const [ArregloDatosMenu, setArregloDatosMenu] = useState([]);

    //Esta función realizará una petición al servidor web
    //para traer todos los datos del menú
    function PeticionAPI(){

        fetch("http://localhost:5297/api/DatosMenu")
        .then(ArregloDatos => ArregloDatos.json())
        .then(ArregloDatos => {
            setArregloDatosMenu(ArregloDatos);
            setListaDatosMenu(ArregloDatos);
        })
        .catch(error => console.log(error))

    }//Fin función

    //Se utiliza este Hook para que cuando se renderize la página inicial
    //ejecute la petición al servidor
    useEffect(PeticionAPI, []);

    return(<div className="inicio">

        <SeccionEncabezado/>
        <SeccionIntroducion/>
        <SeccionMenu ListaDatosMenu={ArregloDatosMenu}/>

        <SeccionUbicacionRestaurante/>

    </div>);

}//Fin componente

export default Pagina_Inicio;