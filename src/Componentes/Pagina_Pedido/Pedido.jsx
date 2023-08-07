import React, {useContext, useEffect, useState} from "react";
import "../../Estilos/Pagina_PedidoCSS/pedido.css";

//Importando componentes
import SeccionPlatos from "./Platos";
import SeccionTablaCompras from "./TablaCompras";
import SeccionProcesoPago from "./VentanaProcesoPago";
import SeccionVentanaPagoMensaje from "./VentanaPagoMensaje";

import { DataContexto } from "../../Contexto/contextoAPI";

//Esta componente tiene la lógica para mostrar toda la información de los platos del menú
function PaginaPedido(){

    //Utilizando el ContextAPI
    const {ListaDatosMenu} = useContext(DataContexto);
    const [ListaDatosPlatos, setListaDatosPlatos] = useState([]);
    const [MostrarVentanaProcesoPago, setMostrarVentanaProcesoPago] = useState(false);

    //Estas variables mostrán el contenedor del proceso de pago y mensaje de pago éxitoso
    const [SeccionPago, setSeccionPago] = useState(true);
    const [SeccionPagoFinalizado, setSeccionPagoFinalizado] = useState(false);

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

    //Listado de platos seleccionados para comprar
    const [ListaPlatosCompra, setListaPlatosCompra] = useState([]);
    const [PrecioPedidoTotal, setPrecioPedidoTotal] = useState(0);

    return(<div className="pedido">
        
        {MostrarVentanaProcesoPago && <div className="pedido__procesoPago">
            
            {SeccionPago && <SeccionProcesoPago 
            setVentana={setMostrarVentanaProcesoPago} 
            precioCompraFinal={PrecioPedidoTotal}
            ListaPlatosFactura={ListaPlatosCompra}
            setMensaje={setSeccionPagoFinalizado}
            setProceso={setSeccionPago}/>}

            {SeccionPagoFinalizado && <SeccionVentanaPagoMensaje setVentana={setMostrarVentanaProcesoPago}/>}

        </div>}

        <SeccionPlatos 
        DatosMenu={ListaDatosMenu} 
        DatosPlatos={ListaDatosPlatos} 
        setPlatosSeleccionados={setListaPlatosCompra}
        Lista={ListaPlatosCompra}/>

        <SeccionTablaCompras 
        ListaPlatosSeleccionados={ListaPlatosCompra}
        setLista={setListaPlatosCompra}
        setVentanaProceso={setMostrarVentanaProcesoPago}
        setProcesoPago = {setSeccionPago}
        PrecioTotal={PrecioPedidoTotal}
        setPrecioTotal={setPrecioPedidoTotal}/>

    </div>);

}//Fin componente

export default PaginaPedido;