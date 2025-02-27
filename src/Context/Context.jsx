import { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
    const [title, setTitle] = useState(0); // Set an initial string value

    return (
        <StoreContext.Provider value={{ title, setTitle }}>
            {children}
        </StoreContext.Provider>
    );
};
