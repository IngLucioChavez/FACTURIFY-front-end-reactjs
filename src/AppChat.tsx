import { RouterProvider } from "react-router"
import { AppRouter } from "./router/AppRouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

export const AppChat = () => {
    return (<>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={AppRouter} />
        </QueryClientProvider>
    </>)
}
