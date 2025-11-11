import { createContext, useContext, ReactNode, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({children} : {children: ReactNode}) => {
    
    const [state, setState] = useState({});
    
    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(DataContext);
};
