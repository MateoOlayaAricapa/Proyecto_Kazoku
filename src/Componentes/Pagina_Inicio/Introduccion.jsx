import React from "react";
import "../../Estilos/Pagina_InicioCSS/introducion.css"

//Importando imágenes
import ImagenPlatoComida from "../../Multimedia/PlatoPrincipal.png";
import ImagenFoto1 from "../../Multimedia/FondoMujer.jpg";
import ImagenFoto2 from "../../Multimedia/FondoMujer2.jpg";

//Esta componente contiene la lógica que muestra información de introducción
function SeccionIntroducion(){

    return(<section id="section__intro" className="introducion">

        <div className="introducion__reseña">

            <div className="introducion__reseña__imagen">
                <img src={ImagenFoto1} alt="Foto de perfil de una clienta"/>
            </div>

            <div className="introducion__reseña__texto">
                <p>“La comida servida en este restaurante japonés es el mejor. Muy nutritiva y saludable”</p>
            </div>

        </div>

        <div className="introducion__info">
            
            <div className="introducion__info__titulo">
                
                <h1>PLATOS JAPONESES</h1>

                <div className="introducion__info__titulo__p">

                    <p>Explora todos nuestra variedad de platos de comida japonesa tradicional</p>

                </div>

                <a href="#section__menu" type="">EXPLORA AHORA!</a>

            </div>

            <div className="introducion__info__imagen">
                
                <img src={ImagenPlatoComida} alt="Imagen que representa un plato de comida preparado por el restaurante japonés"/>

            </div>

        </div>

        <div className="introducion__reseña">

            <div className="introducion__reseña__imagen">
                <img src={ImagenFoto2} alt="Foto de perfil de una clienta"/>
            </div>

            <div className="introducion__reseña__texto">
                <p>“Me encanta el servicio que ofrecen. Es rápido y limpio. Además, son muy educados y organizados”</p>
            </div>

        </div>
        
    </section>);

}//Fin componente

export default SeccionIntroducion;