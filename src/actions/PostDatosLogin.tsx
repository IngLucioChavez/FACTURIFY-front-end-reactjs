import { APIBackEnd } from "@/API/API-backend"

export interface User {
    id: number,
    nombre: string,
    email: string,
    created_at?: string,
    updated_at?: string
}

export interface ResponseLogin {
    status: number,
    token: string,
    type: string,
    message: string,
    user: User
}

export const PostDatosLoginAction = async (correo: string, pass: string) => {

    const response = await APIBackEnd.post<ResponseLogin>("/login", {
        email: correo,
        password: pass
    });

    return response.data;
}
