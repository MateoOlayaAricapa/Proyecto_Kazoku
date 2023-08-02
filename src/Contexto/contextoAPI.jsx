import { createContext, useState } from "react";

//Se creará la lógica para guardar una lista de datos del menú cuando sea solicitada por el cliente

//Creando un objeto de la clase createContext()
export const DataContexto = createContext();

export function DataContextProvider({children}){

    const [ListaDatosMenu, setListaDatosMenu] = useState([]);

    return(<DataContexto.Provider value={{ListaDatosMenu, setListaDatosMenu}}>

        {children}

    </DataContexto.Provider>);

}//Fin función