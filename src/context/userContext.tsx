import { PostDatosLoginAction, type User } from "@/actions/PostDatosLogin"
import { createContext, useState, type PropsWithChildren } from "react"

interface UserContextProps {
    authStatus: "checando" | "autenticado" | "no-autenticado",
    user: User | null,
    token: string | null,

    login: (email: string, password: string) => void,
    logout: () => void,
}

export const userContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<"checando" | "autenticado" | "no-autenticado">("checando");
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const handleLogin = (email: string, password: string) => {

        PostDatosLoginAction(email, password)
            .then((r) => {
                setAuthStatus("autenticado");
                setUser(r.user);
                setToken(r.token);
            }).catch(() => {
                setAuthStatus("no-autenticado");
                setUser(null);
                setToken(null);
            });

    }

    const handleLogout = () => {
        return true;
    }

    return <userContext.Provider value={{
        authStatus,
        user,
        token,

        login: handleLogin,
        logout: handleLogout
    }}>
        {children}
    </userContext.Provider>
}
