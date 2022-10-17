import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    async function login(email, senha){
      if(email === 'fabinho.mori' && senha === '12345'){
          setUsuario({
              nome: 'Fábio Mori',
              email: email,
              telefone: '+55 (11) 99999-9999',
              endereco: 'Escola Matriz, 12345',
          });
          return 'ok';
      }
      return 'Email ou senha incorretos';
    }

    return (
        <AutenticacaoContext.Provider
            value={{
                usuario,
                login,
            }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
}