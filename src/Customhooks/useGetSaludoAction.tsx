import { GetSaludoAction } from "@/actions/GetSaludo.action";
import { useQuery } from "@tanstack/react-query";


export const useGetSaludoAcyion = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["data"],
        queryFn: GetSaludoAction,
        staleTime: 1000 * 60,
    });

    return {
        ...data,
        isError,
        isLoading
    }

}