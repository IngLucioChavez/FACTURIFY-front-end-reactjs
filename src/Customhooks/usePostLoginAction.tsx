import { PostDatosLoginAction } from "@/actions/PostDatosLogin";
import { useMutation } from "@tanstack/react-query";

export const usePostLoginAction = () => {
    return useMutation({
        mutationFn: ({ user, password }: { user: string, password: String }) => PostDatosLoginAction(user, password),
        onSuccess: () => {
        },
        onError: () => {
        }
    });
}