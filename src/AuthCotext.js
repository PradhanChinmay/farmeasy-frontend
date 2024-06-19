import React, { createContext, useState} from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState('');

    const login = (id) => {
        setIsAuthenticated(true);
        setUserId(id);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserId('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};