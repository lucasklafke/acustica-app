'use client'
import React, { createContext, useState, useContext } from 'react';

// Defina o tipo para o token
type Token = string | null;


// Crie o contexto
type AuthContextType = {
  token: Token;
  login: (userToken: Token) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
});

// Defina as propriedades para o componente AuthProvider
type AuthProviderProps = {
  children: React.ReactNode;
};

// Crie um provedor para o contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<Token>(null);

  // Função para fazer login e definir o token no estado
  const login = (userToken: Token) => {
    setToken(userToken);
  };

  // Função para fazer logout e limpar o token do estado
  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Crie um hook para acessar o contexto
export const useAuth = (): AuthContextType => useContext(AuthContext);
