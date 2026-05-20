import { APIBackEnd } from "@/API/API-backend";
import type { MisConversacionesResponse } from "@/interfaces/ResponseMisConversaciones";

export const GetMisConversaciones = async (token: string): Promise<MisConversacionesResponse> => {

    const response = await APIBackEnd.get<MisConversacionesResponse>("/obtenerMisConversaciones", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;

}
