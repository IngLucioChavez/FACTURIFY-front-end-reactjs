import { APIBackEnd } from "@/API/API-backend"


export const PostEnviarMensaje = async ({
    mensaje,
    idConversacion,
    token
}: {
    mensaje: string,
    idConversacion: number,
    token: string
}) => {

    const response = await APIBackEnd.post("/enviarMensaje", {
        conversacion_id: idConversacion,
        mensaje
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;

}
