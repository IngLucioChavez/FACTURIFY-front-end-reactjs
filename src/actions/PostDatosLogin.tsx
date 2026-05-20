import { APIBackEnd } from "@/API/API-backend"

interface ResponseLogin {
    message: string,
    status: number,
    toke: string
}

export const PostDatosLoginAction = async (correo: String, pass: String) => {

    const response = await APIBackEnd.post<ResponseLogin>("/login", {
        datos: {
            usuario: correo,
            password: pass
        }
    });

    return response.data;
}
