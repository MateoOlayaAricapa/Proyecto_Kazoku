import React from "react";
import "../../Estilos/Pagina_PedidoCSS/campocontacto.css";

//Esta componente tiene la lógica de un campo que será rellenado con información de contacto
export function CampoContacto({anchoDiv, nombreCampo, setCampo}){

    return(<div className="campoContacto" style={{width:anchoDiv}}>
        
        <h4>{nombreCampo}</h4>
        <input type="text" onChange={(e) => setCampo(e.target.value)}/>

    </div>)

}//Fin componente

//Esta componente tiene la lógica de un campo que despliega opciones como modalidad de entrega
export function CampoModalidadEntrega({setModalidad}){

    return(<div className="campoModalidad">
        
        <h4>Modalidad de entrega pedido</h4>
        
            <select onChange={(e) => setModalidad(e.target.value)}>
                <option value="Vacio">Selecciona</option>
                <option value="Entrega a domicilio">Entrega a domicilio</option>
                <option value="Recoger en el restaurante">Recoger en el restaurante</option>
            </select>
        
    </div>);

}//Fin componente

//Esta componente tiene la lógica de un campo que despliega opciones como modalidad de entrega
export function CampoSucursalCompra({ListaDatos, setIdSucursal}){

    return(<div className="campoModalidad">
        
        <h4>Sucursal a comprar</h4>
        
            <select onChange={(e) => setIdSucursal(e.target.value)}>
                <option value={0}>Selecciona</option>
                {ListaDatos.map((item, i) => 
                <option key={i} value={i+1}>{item.nombre_barrio}</option>)}
            </select>
        
    </div>);

}//Fin componente

//Esta componente tiene la lógica de un botón que representa el método de pago a seleccionar
export function CampoMetodoPago({TipoMetodo, ImagenMetodo, setMetodo, botonMetodoSeleccion, setBotonSelecionado, indice}){

    return(<div className="campoMetodo" 
    onClick={() => {setMetodo(TipoMetodo); setBotonSelecionado(indice);}}
    style={{background: botonMetodoSeleccion == true ? "#F0A5A9" : "#F3F3F3"}}>
        
        <img src={ImagenMetodo} alt="Imagen que representa un método de pago"/>
        <h3>{TipoMetodo}</h3>

    </div>);

}//Fin componente
