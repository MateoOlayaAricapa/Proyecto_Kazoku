import React, { useEffect, useState } from "react";
import "../../Estilos/Pagina_PedidoCSS/tablacompras.css"

//Importando componentes
import PlatoCompraFactura from "./TarjetaPlatoCompra";

//Esta componente tiene la lógica para mostrar la tabla de compras
function SeccionTablaCompras({ListaPlatosSeleccionados, setLista, setVentanaProceso, setPrecioTotal, PrecioTotal, setProcesoPago}){

    //Detectando cambios en los datos encontrados en la lista de platos seleccionados
    useEffect(() => {

        var precio = 0;

        ListaPlatosSeleccionados.map((item) => {

            precio += item.precio;

        });

        setPrecioTotal(precio);

    }, [ListaPlatosSeleccionados]);

    return(<div className="tablaCompras">

        <div className="tablaCompras__tabla">
            
           <div className="tablaCompras__tabla__titulo">
                <h2>Detalles de la compra</h2>
           </div>

           <div className="tablaCompras__tabla__platos">

                {ListaPlatosSeleccionados.map((item, i) => 
                <PlatoCompraFactura
                key={i} 
                Datos={item}
                setListaPlatosCompra={setLista}
                Lista={ListaPlatosSeleccionados}/>)}

           </div>

           <div className="tablaCompras__tabla__factura">
            
                <h2>Resumen de pago</h2>

                <div className="tablaCompras__tabla__factura__info">
                    
                    <div className="tablaCompras__tabla__factura__info__totalPago">
                        <h4>Total plato(s)</h4>
                        <h3>{ListaPlatosSeleccionados.length}</h3>
                    </div>

                    <div className="tablaCompras__tabla__factura__info__totalPago">
                        <h4>Total a pagar</h4>
                        <h3>$ {PrecioTotal}</h3>
                    </div>

                </div>

                <button type="button" onClick={() => {setVentanaProceso(true); setProcesoPago(true);}}>Realizar proceso de compra</button>

           </div>

        </div>
    
    </div>);

}//Fin componente

export default SeccionTablaCompras;