import { APIBackEnd } from "@/API/API-backend";
import type { ResponseMensajesConversacion } from "@/interfaces/ResponseMensajesConversacion"

export const GetMensajesConversacion = async (idConversacion: number, token: string): Promise<ResponseMensajesConversacion> => {

    const response = await APIBackEnd.get<ResponseMensajesConversacion>(`/obtenerMensajesConversacion/${idConversacion}/mensajes`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;

}
