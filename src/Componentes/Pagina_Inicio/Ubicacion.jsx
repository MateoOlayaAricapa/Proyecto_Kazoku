import React, { useEffect, useState } from "react";
import "../../Estilos/Pagina_InicioCSS/ubicacion.css";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

//Importando imágenes
import IconoLocalizacion from "../../Multimedia/localizacion.png";
import FotoBarrio from "../../Multimedia/FotoBarrioSanAntonio.jpg";

//Esta componente tiene la lógica de mostrar información sobre las ubicaciones del restaurante
function SeccionUbicacionRestaurante(){

    const [ListaSucursales, setListaSucursales] = useState([]);

    //Función que realiza una petición al servidor web para traer los datos 
    //de las sucursales que tiene el restaurante japonés
    function PeticionAPI(){

        fetch("http://localhost:5297/api/sucursales")
        .then(resultados => resultados.json())
        .then(resultadosJSON => setListaSucursales(resultadosJSON))
        .catch(error => console.log(error))

    }//Fin función

    //Utilizando el useEffect para ejecutar la petición
    useEffect(PeticionAPI, []);

    return(<section id="section__ubication" className="ubicacionRestaurante">
        
        <div className="ubicacionRestaurante__info">
            
            <h1>Nuestras ubicaciones</h1>
            <p>Estamos úbicados en los siguientes barrios de la ciudad:</p>

            {ListaSucursales.map((dato, i) => 
            <div key={i} className="ubicacionRestaurante__info__tarjetaBarrio">
                
                <div className="ubicacionRestaurante__info__tarjetaBarrio__foto">
                    
                    <img src={FotoBarrio} alt="Imagen o foto que representa el barrio donde está úbicado el restaurante"/>

                </div>

                <div className="ubicacionRestaurante__info__tarjetaBarrio__texto">
                    
                    <h2>{dato.nombre_barrio}</h2>
                    <h3>{dato.direccion}</h3>
                    <h3>Teléfono: {dato.telefono}</h3>

                </div>

                <div className="ubicacionRestaurante__info__tarjetaBarrio__icono">
                    
                    <img src={IconoLocalizacion} alt="Icono que representa el signo de ubicación en el mapa"/>

                </div>

            </div>)}

        </div>

        <div className="ubicacionRestaurante__mapa">

            <MapContainer 
            className="leaflet-container" 
            center={[3.43722, -76.5225]} 
            zoom={12.5} 
            scrollWheelZoom={false}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[3.4474640539971286, -76.53881628794969]}>

                </Marker>

                <Marker position={[3.397969094756474, -76.54052508039142]}>

                </Marker>

                <Marker position={[3.4282457730577813, -76.54248837301024]}>

                </Marker>

            </MapContainer>

        </div>

    </section>);

}//Fin componente

export default SeccionUbicacionRestaurante;