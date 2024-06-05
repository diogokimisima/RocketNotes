import { createContext, useContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ name: "Diogo", email: 'dkimisima@gmail.com'}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

AuthProvider.propTypes = {
    children: PropTypes.node
};

// Definindo propTypes para o valor do contexto
AuthProvider.propTypes = {
    value: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.node
};


export { AuthProvider, useAuth };