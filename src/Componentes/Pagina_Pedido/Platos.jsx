import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Estilos/Pagina_PedidoCSS/platos.css";

//Importando imágenes
import IconoFlecha from "../../Multimedia/FlechaRegresar.png"
import IconoBuscar from "../../Multimedia/IconoBuscar.png";

//Importando componentes
import BotonMenuPedido from "./BotonMenu";
import TarjetaPlatoMenu from "./TarjetaPlato";

//Esta componente tiene la lógica que mostrará información de los platos
function SeccionPlatos({DatosMenu, DatosPlatos}){

    const navegacion = useNavigate();
    const {idMenu} = useParams();

    //Creando código para cambiar el estado de color de fondo
    //para cada botón al ser presionado
    const colorNormalFondo = "#FFF";
    const [BotonSeleccionado, setBotonSeleccionado] = useState(null);
    const [DatosPlatosRelacionados, setDatosPlatosRelacionados] = useState([]);

    //Dado que al renderizar inicialmente esta componente,
    //no toma el valor del useParams() para colocarlo en el
    //setBotonSeleccionado. Por lo tanto, se utilizará
    //el Hook de useEffect()
    useEffect(() => {

        // Actualizamos BotonSeleccionado cuando idMenu cambie
        setBotonSeleccionado(parseInt(idMenu) || 1);

    }, [idMenu]);

    //Esta función detecta cuál menú fue el seleccionado para sacar los platos relacionados
    function PlatosRelacionadosMenu(){

        const platosRelacionados = DatosPlatos.filter((dato) => dato.id_menu === BotonSeleccionado);

        setDatosPlatosRelacionados(platosRelacionados);

    }//Fin función

    //Este hook se ejecutará cuando detecté que un botón del menú fue clickeado
    useEffect(() => PlatosRelacionadosMenu(), [BotonSeleccionado, DatosPlatos]);

    return(<div className="platos">
        
        <div className="platos__busqueda">
            
            <button type="button" onClick={() => navegacion("/")}>

                <img src={IconoFlecha} alt="Icono de flecha que indica regresar a otra página"/>

            </button>

            <div className="platos__busqueda__barra">

                <input type="text" placeholder="Busca un plato en especifíco..."/>
                
                <button type="button">

                    <img src={IconoBuscar} alt="Icono que representar el botón de buscar plato"/>

                </button>

            </div>

        </div>

        <div className="platos__menu">
            
            {DatosMenu.map((dato, i) => 
            <BotonMenuPedido
            //Se suma +1 a la variable i para que tengan el mismo
            //valor que tiene cada dato de menú con su id_menu 
            key={i+1} 
            DatoMenu={dato} 
            //En esta parte verifica si el botón fue seleccionado o no
            //Enviará como respuesta un true o false
            BotonSeleccionado = {BotonSeleccionado === i+1}
            //En esta parte envíamos el set de la variable estado
            //"BotónSeleccionado"
            onBotonSeleccionado = {setBotonSeleccionado}
            indice = {i+1}
            colorFondo = {colorNormalFondo}/>)}

        </div>

        <div className="platos__titulo">
            
            <h1>Escoge el plato a comprar</h1>

        </div>

        <div className="platos__tarjetas">
            
            {DatosPlatosRelacionados.map((item, i) => 
            <TarjetaPlatoMenu 
            key={i} 
            nombrePlato={item.nombre}
            descripcionPlato={item.descripcion}
            precioPlato={item.precio}/>)}

        </div>

    </div>);

}//Fin componente

export default SeccionPlatos;