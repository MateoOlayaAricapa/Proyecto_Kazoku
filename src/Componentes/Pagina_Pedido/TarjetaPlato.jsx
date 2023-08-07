import React from "react";
import "../../Estilos/Pagina_PedidoCSS/tarjetaplato.css";

//Importando imagen de prueba
import ImagenPlatoPrueba from "../../Multimedia/FondoPlatoPrueba.jpg";
import IconoAgregar from "../../Multimedia/anadir.png";

//Esta componente tiene la lógica para crear una tarjeta que tiene
//información de cada plato a vender
function TarjetaPlatoMenu({DatoPlato, setPlato, ListaPlatos}){

    return(<div className="tarjetaPlato">
        
        <div className="tarjetaPlato__info">
            
            <div className="tarjetaPlato__info__imagen">
                
                <img src={ImagenPlatoPrueba} alt="Imagen que representa el plato de sushi"/>

            </div>

            <div className="tarjetaPlato__info__texto">
                
                <h4>{DatoPlato.nombre}</h4>
                <p>{DatoPlato.descripcion}</p>

            </div>

        </div>

        <div className="tarjetaPlato__botonPrecio">
            
            <div className="tarjetaPlato__botonPrecio__boton" onClick={() => setPlato([...ListaPlatos, DatoPlato])}>
                
                <img src={IconoAgregar} alt="Icono que representar agregar plato a la compra"/>
                <h3>Añadir a la compra</h3>

            </div>

            <div className="tarjetaPlato__botonPrecio__precio">
                
                <h2>${DatoPlato.precio}</h2>

            </div>

        </div>

    </div>)

}//Fin componente

export default TarjetaPlatoMenu;