import { PostDatosLoginAction } from "@/actions/PostDatosLogin";
import { useMutation } from "@tanstack/react-query";
import type { ResponseLogin } from '../actions/PostDatosLogin';
import { toast } from "sonner";

export const usePostLoginAction = () => {

    return useMutation({
        mutationFn: ({ correo, password }: { correo: string, password: string }): Promise<ResponseLogin> => PostDatosLoginAction(correo, password),
        onSuccess: () => {
        },
        onError: (error) => {
            toast.error(`ERROR LOGEO`, {
                description: "Intente de Nuevo",
                duration: 2_000,
                position: "top-center",
                action: {
                    label: "X",
                    onClick: () => toast.dismiss()
                }
            });
        }
    });
}