import { APIBackEnd } from "@/API/API-backend"

interface MessageSaludo {
    message: string
}

export const GetSaludoAction = async () => {

    const { data } = await APIBackEnd.get<MessageSaludo>("/saludo");

    return { data };

}
