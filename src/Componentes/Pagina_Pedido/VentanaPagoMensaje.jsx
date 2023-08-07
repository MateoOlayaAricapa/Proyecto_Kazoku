import React from "react";
import "../../Estilos/Pagina_PedidoCSS/ventanaprocesomensaje.css";

//Importando imagen
import ImagenMensaje from "../../Multimedia/Mensaje.jpg";

//Esta componente tiene la lógica de mostrar una ventana con un mensaje de pago finalizado
function SeccionVentanaPagoMensaje({setVentana}){

    return(<div className="pagoMensaje">
        
        <div className="pagoMensaje__texto">
            
            <h1>Estamos preparando tu pedido solicitado!</h1>
            <p>No olvides revisar o estar pendiente de tu teléfono porque te estaremos comunicando por ahí cuando el pedido esté listo y finalizado. ¡Gracias!</p>
            <button type="button" onClick={() => setVentana(false)}>Aceptar</button>

        </div>

        <div className="pagoMensaje__imagen">
            
            <img src={ImagenMensaje} alt="Imagen de una cocinera indicando que su pedido está preparándose"/>

        </div>

    </div>);

}//Fin componente

export default SeccionVentanaPagoMensaje;