import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        // Check for a token in localStorage on initialization
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setRole({
                username: decoded.sub,
                role: decoded.role,
            });
        }
    }, []);

    const login = (token) => {
        const decodificado = jwtDecode(token);
        setRole({
            username: decodificado.sub,
            role: decodificado.role,
        });

        localStorage.setItem('token', token);

    };

    const logout = () => {
        setRole(null);
        localStorage.removeItem('token');
    }

    return (
        <RoleContext.Provider value={{role, login, logout}}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);