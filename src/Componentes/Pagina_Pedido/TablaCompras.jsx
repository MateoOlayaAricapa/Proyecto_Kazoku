import React from "react";
import "../../Estilos/Pagina_PedidoCSS/tablacompras.css"

//Importando componentes
import PlatoCompraFactura from "./TarjetaPlatoCompra";

//Esta componente tiene la lógica para mostrar la tabla de compras
function SeccionTablaCompras(){

    return(<div className="tablaCompras">

        <div className="tablaCompras__tabla">
            
           <div className="tablaCompras__tabla__titulo">
                <h2>Detalles de la compra</h2>
           </div>

           <div className="tablaCompras__tabla__platos">

                <PlatoCompraFactura/>
                <PlatoCompraFactura/>

           </div>

           <div className="tablaCompras__tabla__factura">
            
                <h2>Resumen de pago</h2>

                <div className="tablaCompras__tabla__factura__info">
                    
                    <div className="tablaCompras__tabla__factura__info__totalPago">
                        <h4>Total plato(s)</h4>
                        <h3>4</h3>
                    </div>

                    <div className="tablaCompras__tabla__factura__info__totalPago">
                        <h4>Total a pagar</h4>
                        <h3>45.000</h3>
                    </div>

                </div>

                <button type="button">Realizar proceso de compra</button>

           </div>

        </div>
    
    </div>);

}//Fin componente

export default SeccionTablaCompras;