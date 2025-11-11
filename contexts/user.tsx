import { createContext, useContext, ReactNode, useState } from "react";

const UserContext = createContext({theme:{}, language:"en"});

export const UserProvider = ({children} : {children: ReactNode}) => {

    const [userState, setUserState] = useState({
        theme: { darkMode: false },
        language: "en",
    }); 

    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};