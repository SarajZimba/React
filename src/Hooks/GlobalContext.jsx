import { createContext } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{

    return(
        <GlobalContext.Provider value={{name:"Saraz", email:"jimbasaraj@gmail.com"}}>
            {children}
        </GlobalContext.Provider>
    );

};
