import "../../Estilos/Pagina_InicioCSS/menu.css";
import TarjetaComida from "./TarjetaComidaMenu";

//Componente que tiene la lógica de mostrar la información del menú
function SeccionMenu({ListaDatosMenu}){

    const ArregloMenu = ListaDatosMenu;

    return(<section className="menu">
        
        <div className="menu__info">
            
            <h1>Nuestro menú</h1>
            <p>Selecciona el tipo de comida japonesa que deseas comprar en el restaurante </p>

        </div>

        <div className="menu__tarjetas">

            {ArregloMenu.map((dato, i) => <TarjetaComida 
            key={i}
            IDmenu = {dato.id_menu} 
            titulo={dato.titulo} 
            imagen={dato.imagen} 
            descripcion={dato.descripcion_general}/>)}

        </div>

    </section>);

}//Fin componente

export default SeccionMenu;