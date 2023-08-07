import React, {useState, useEffect} from "react";
import "../../Estilos/Pagina_PedidoCSS/ventanaprocesopago.css";

//Importando componentes
import { CampoContacto, CampoModalidadEntrega, CampoMetodoPago, CampoSucursalCompra } from "./CampoContacto";

//Importando imágenes
import ImagenPagoLinea from "../../Multimedia/transferencia-movil.png";
import ImagenTransferencia from "../../Multimedia/transferencia-bancaria.png";
import ImagenTarjeta from "../../Multimedia/tarjetas-de-credito.png";

//Esta componente tiene la lógica para desplegar una ventana para realizar el proceso de pago
function SeccionProcesoPago({setVentana, precioCompraFinal, ListaPlatosFactura, setMensaje, setProceso}){

    //Variable que guarda el valor del tipo de método de pago seleccionado
    const [MetodoPagoSeleccion, setMetodoPagoSeleccion] = useState("");
    const [BotonSeleccionadoMetodo, setBotonSeleccionadoMetodo] = useState(0);

    const [ListaDatosSucursales, setListaDatosSucursales] = useState([]);

    //Datos del usuario
    const [nombreU, setNombreU] = useState("");
    const [apellidosU, setApellidosU] = useState("");
    const [direccionU, setDireccionU] = useState("");
    const [telefonoU, setTelefonoU] = useState("");

    //Datos registro compra
    const [ModalidadEntrega, setModalidadEntrega] = useState("");
    const [idSucursal, setidSucursal] = useState(0);

    //Función que ejecuta una solicitud al servidor para guardar datos
    function SolicitudPOSTusuario(){

        //Fetch para guardar inicialmente los datos del usuario que realiza la compra
        //Creando el cuerpo del request
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nombre": nombreU,
                "apellido": apellidosU,
                "direccion_casa": direccionU,
                "telefono": telefonoU })
        };

        fetch("http://localhost:5297/api/GuardarDatoUsuario", requestOptions)
        .then(respuesta => respuesta.json())
        .then(respuestaSolicitud => SolicitudPOSTregistroCompra(respuestaSolicitud.id_usuario))
        .catch(error => console.log(error));

    }//Fin función

    //Esta función se ejecuta después del Post usuarios para guardar los datos
    //de registro compra
    function SolicitudPOSTregistroCompra(id){

        //Fetch para guardar los datos en la entidad registro_compra
        const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "fecha_registro": new Date(), 
                "modalidad_entrega": ModalidadEntrega,
                "pago_pedido_total": precioCompraFinal,
                "metodo_pago": MetodoPagoSeleccion,
                "id_sucursal": idSucursal,
                "id_usuario": id
            })
        };

        fetch("http://localhost:5297/api/GuardarDatosRegistroCompra", requestOptions2)
        .then(respuesta => respuesta.json())
        .then(respuestaSolicitud => SolicitudPOSTregistroPlatos(respuestaSolicitud.id_registro_compra))
        .catch(error => console.log(error));

    }//Fin función

    //Esta función se ejecuta después del post registro compra para guardar los datos
    //de todos los platos que se compraron
    function SolicitudPOSTregistroPlatos(idRegistroCompra){

        //Generando una nueva lista de tipo JSON con los atributos necesarios
        var ListaEnvioDatos = ListaPlatosFactura.map((item) => {

            return {
                
                id_registro_compra: idRegistroCompra, 
                precio_final: item.precio,
                cantidad_plato: item.cantidad,
                id_plato: item.id_plato,
            }

        });

        const requestOptions3 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ListaEnvioDatos)
        };

        fetch("http://localhost:5297/api/GuardarDatosRegistroPlato", requestOptions3)
        .then(respuesta => respuesta)
        .then(respuestaSolicitud => {

            if(respuestaSolicitud.status === 200){
                setMensaje(true); 
                setProceso(false);
            }//Fin condición

        })
        .catch(error => console.log(error));

    }//Fin función

    //Este useEffect realiza una solicitud al servidor para traer datos de sucursales
    useEffect(() => {

        fetch("http://localhost:5297/api/sucursales")
        .then(ListaDatos => ListaDatos.json())
        .then(ListaDatos => setListaDatosSucursales(ListaDatos))
        .catch(error => console.log(error));

    }, []);

    return(<div className="ventanaProcesoPago">
        
        <div className="ventanaProcesoPago__tituloPrincipal">
            
            <h1>Información de contacto</h1>

        </div>

        <div className="ventanaProcesoPago__camposContacto">
            
            <CampoContacto anchoDiv={"48%"} nombreCampo={"Nombre"} setCampo={setNombreU}/>

            <CampoContacto anchoDiv={"48%"} nombreCampo={"Apellidos"} setCampo={setApellidosU}/>

            <CampoContacto anchoDiv={"48%"} nombreCampo={"Dirección"} setCampo={setDireccionU}/>

            <CampoContacto anchoDiv={"48%"} nombreCampo={"Teléfono"} setCampo={setTelefonoU}/>

            <CampoSucursalCompra ListaDatos={ListaDatosSucursales} setIdSucursal={setidSucursal}/>

            <CampoModalidadEntrega setModalidad={setModalidadEntrega}/>

        </div>

        <div className="ventanaProcesoPago__tituloMetodo">
            
            <h1>Métodos de pago</h1>

        </div>

        <div className="ventanaProcesoPago__metodosPago">

            <CampoMetodoPago
            indice = {1} 
            TipoMetodo={"Tarjeta de crédito"} 
            ImagenMetodo={ImagenTarjeta}
            setMetodo={setMetodoPagoSeleccion}
            botonMetodoSeleccion = {BotonSeleccionadoMetodo === 1}
            setBotonSelecionado = {setBotonSeleccionadoMetodo}/>

            <CampoMetodoPago
            indice = {2}  
            TipoMetodo={"Pago en línea"} 
            ImagenMetodo={ImagenPagoLinea}
            setMetodo={setMetodoPagoSeleccion}
            botonMetodoSeleccion = {BotonSeleccionadoMetodo === 2}
            setBotonSelecionado = {setBotonSeleccionadoMetodo}/>

            <CampoMetodoPago
            indice = {3}  
            TipoMetodo={"Transferencia"} 
            ImagenMetodo={ImagenTransferencia}
            setMetodo={setMetodoPagoSeleccion}
            botonMetodoSeleccion = {BotonSeleccionadoMetodo === 3}
            setBotonSelecionado = {setBotonSeleccionadoMetodo}/>

        </div>

        <div className="ventanaProcesoPago__botonesProceso">
            
            <button type="button" onClick={() => setVentana(false)}>Cancelar</button>
            <button type="button" onClick={() => SolicitudPOSTusuario()}>Pagar</button>

        </div>

    </div>);

}//Fin componente

export default SeccionProcesoPago;