import React, { useState } from "react";
import "../../Estilos/Pagina_PedidoCSS/tarjetaplatocompra.css";

//Importando iconos
import IconoCerrar from "../../Multimedia/cerrar.png";
import FondoPlato from "../../Multimedia/FondoPlatoPrueba.jpg";
import IconoAgregar from "../../Multimedia/agregar.png";
import IconoQuitar from "../../Multimedia/menos.png";

//Esta componente tiene la lógica que muestra la información del plato a comprar
function PlatoCompraFactura(){

    //Creando variable de estado para modificar el valor de cantidad platos a comprar
    const [CantidadPlato, setCantidadPlato] = useState(1);

    return(<div className="tarjetaPlatoCompra">
        
        <div className="tarjetaPlatoCompra__botonQuitar">
            
            <button type="button">
                <img src={IconoCerrar} alt="Icono que representa el botón quitar plato compra"/>
            </button>

        </div>

        <div className="tarjetaPlatoCompra__imagen">
            <img src={FondoPlato} alt="Imagen que representa el plato seleccionado a comprar"/>
        </div>

        <div className="tarjetaPlatoCompra__info">
           
           <div className="tarjetaPlatoCompra__info__nombre">
            
                <h4>Sushi de pollo con verduras</h4>

           </div>

           <div className="tarjetaPlatoCompra__info__precio">
            
                <h4>$ 15.000</h4>

           </div>

           <div className="tarjetaPlatoCompra__info__cantidad">
            
                <button type="button" onClick={() => CantidadPlato === 1 ? setCantidadPlato(1) : setCantidadPlato(CantidadPlato - 1)}>
                    <img src={IconoQuitar} alt="Icono que representa el botón de agregar cantidad plato a comprar"/>
                </button>

                <h4>{CantidadPlato}</h4>

                <button type="button" onClick={() => setCantidadPlato(CantidadPlato + 1)}>
                   <img src={IconoAgregar} alt="Icono que representa el botón de restar cantidad plato a comprar"/> 
                </button>

           </div>

        </div>

    </div>)
    
}//Fin componente

export default PlatoCompraFactura;