import React, { useEffect, useState } from "react";
import "../../Estilos/Pagina_PedidoCSS/tarjetaplatocompra.css";

//Importando iconos
import IconoCerrar from "../../Multimedia/cerrar.png";
import FondoPlato from "../../Multimedia/FondoPlatoPrueba.jpg";
import IconoAgregar from "../../Multimedia/agregar.png";
import IconoQuitar from "../../Multimedia/menos.png";

//Esta componente tiene la lógica que muestra la información del plato a comprar
function PlatoCompraFactura({Datos, setListaPlatosCompra, Lista}){

    //Creando variable de estado para modificar el valor de cantidad platos a comprar
    const [CantidadPlato, setCantidadPlato] = useState(1);
    const [TipoBoton, setTipoBoton] = useState("");

    //Función que modifica el precio del plato según la cantidad del plato a pedir
    function ModificarPrecioPlato(){

        if(TipoBoton === "Restar"){

            if(CantidadPlato >= 1){

                const PrecioReferencia = Datos.precio / (CantidadPlato + 1);

                //Obteniendo el nuevo precio según la cantidad del plato a pedir
                let nuevoPrecio = (Datos.precio - PrecioReferencia).toFixed(2);

                //Convirtiendo el resultado a numéro
                //Esto se hace porque .toFixed() regresa una cadena
                nuevoPrecio = parseFloat(nuevoPrecio);

                //Creando una nueva lista con el valor actualizado del precio
                const nuevaLista = Lista.map((plato) => {

                    if(plato.id_plato == Datos.id_plato){

                        return {...plato, precio: nuevoPrecio, cantidad: CantidadPlato}

                    }else{

                        return plato;

                    }//Fin condición

                });//Fin map
                
                //Actualizando la lista
                setListaPlatosCompra(nuevaLista);

            }//Fin condición

        }else if(TipoBoton === "Sumar"){

            const PrecioReferencia = Datos.precio / (CantidadPlato - 1);
            
            //Obteniendo el nuevo precio según la cantidad del plato a pedir
            let nuevoPrecio = (Datos.precio + PrecioReferencia).toFixed(2);

            //Convirtiendo el resultado a numéro
            //Esto se hace porque .toFixed() regresa una cadena
            nuevoPrecio = parseFloat(nuevoPrecio);

            //Creando una nueva lista con el valor actualizado del precio
            const nuevaLista = Lista.map((plato) => {

                if(plato.id_plato == Datos.id_plato){

                    return {...plato, precio: nuevoPrecio, cantidad: CantidadPlato}

                }else{

                    return plato;

                }//Fin condición

            });//Fin map

            //Actualizando la lista
            setListaPlatosCompra(nuevaLista);

        }//Fin condición

    }//Fin función

    //Detectando cuando la variable cantidad plato a comprar cambie su valor
    //De ese modo se ejecuta el método creado para modificar el precio del plato
    useEffect(() => ModificarPrecioPlato(), [CantidadPlato]);

    return(<div className="tarjetaPlatoCompra">
        
        <div className="tarjetaPlatoCompra__botonQuitar">
            
            <button type="button" 
            onClick={() => 
            setListaPlatosCompra(Lista.filter((valor) => valor.id_plato !== Datos.id_plato))}>
                
                <img src={IconoCerrar} alt="Icono que representa el botón quitar plato compra"/>
            
            </button>

        </div>

        <div className="tarjetaPlatoCompra__imagen">
            <img src={FondoPlato} alt="Imagen que representa el plato seleccionado a comprar"/>
        </div>

        <div className="tarjetaPlatoCompra__info">
           
           <div className="tarjetaPlatoCompra__info__nombre">
            
                <h4>{Datos.nombre}</h4>

           </div>

           <div className="tarjetaPlatoCompra__info__precio">
            
                <h4>$ {Datos.precio}</h4>

           </div>

           <div className="tarjetaPlatoCompra__info__cantidad">
            
                <button type="button" onClick={() => {CantidadPlato == 1 ? setCantidadPlato(1) : setCantidadPlato(CantidadPlato - 1); setTipoBoton("Restar")}}>
                    <img src={IconoQuitar} alt="Icono que representa el botón de agregar cantidad plato a comprar"/>
                </button>

                <h4>{CantidadPlato}</h4>

                <button type="button" onClick={() => {setCantidadPlato(CantidadPlato + 1); setTipoBoton("Sumar")}}>
                   <img src={IconoAgregar} alt="Icono que representa el botón de restar cantidad plato a comprar"/> 
                </button>

           </div>

        </div>

    </div>)
    
}//Fin componente

export default PlatoCompraFactura;