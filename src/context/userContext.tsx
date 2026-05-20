import type { User } from "@/actions/PostDatosLogin"
import { createContext, useState, type PropsWithChildren } from "react"

interface UserContextProps {
    authStatus: "checando" | "autenticado" | "no-autenticado",
    user: User | null,
    token: string | null,

    login: (email: string, password: string) => boolean,
    logout: () => void,
}

export const userContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<"checando" | "autenticado" | "no-autenticado">("checando");
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const handleLogin = (email: string, password: string) => {
        return true;
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
