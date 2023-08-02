import React, {useContext, useEffect, useState} from "react";
import "../../Estilos/Pagina_PedidoCSS/pedido.css";

//Importando componentes
import SeccionPlatos from "./Platos";
import SeccionTablaCompras from "./TablaCompras";

import { DataContexto } from "../../Contexto/contextoAPI";

//Esta componente tiene la lógica para mostrar toda la información de los platos del menú
function PaginaPedido(){

    //Utilizando el ContextAPI
    const {ListaDatosMenu} = useContext(DataContexto);
    const [ListaDatosPlatos, setListaDatosPlatos] = useState([]);

    //Función que realizará una petición al servidor web
    //Traerá todos los datos de los platos que prepara el restaurante
    function SolicitudAPI(){

        fetch("http://localhost:5297/api/DatosPlatos")
        .then(ListaDatos => ListaDatos.json())
        .then(ListaDatos => {setListaDatosPlatos(ListaDatos);})
        .catch(error => console.log(error))

    }//Fin función

    //Este hook ejecutará la petición
    useEffect(SolicitudAPI, []);

    return(<div className="pedido">
        
        <SeccionPlatos DatosMenu={ListaDatosMenu} DatosPlatos={ListaDatosPlatos}/>
        <SeccionTablaCompras/>

    </div>);

}//Fin componente

export default PaginaPedido;