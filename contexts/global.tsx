import { createContext, useContext, ReactNode, useState } from "react";

const GlobalContext = createContext({theme:{}, language:"en"});

export const GlobalProvider = ({children} : {children: ReactNode}) => {

    const [globalState, setGlobalState] = useState({
        theme: { darkMode: false },
        language: "en",
    }); 

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};