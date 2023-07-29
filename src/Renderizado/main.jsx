import React from "react";
import ReactDOM from "react-dom/client";
import "../Renderizado/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importando componente de la página inicial
import PaginaInicio from "../Componentes/Pagina_Inicio/Inicio";

//Realizando proceso para renderizar la componente inicial en el DOOM
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

//Renderizando la componente
//También se establecen las rutas de navegación para el sitio web
root.render(<React.StrictMode>

    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={<PaginaInicio/>}/>

        </Routes>

    </BrowserRouter>

</React.StrictMode>);