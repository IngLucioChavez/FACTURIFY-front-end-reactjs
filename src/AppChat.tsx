import { RouterProvider } from "react-router"
import { AppRouter } from "./router/AppRouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { UserContextProvider } from "./context/userContext"

const queryClient = new QueryClient();

export const AppChat = () => {
    return (<>
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                <RouterProvider router={AppRouter} />
            </UserContextProvider>
        </QueryClientProvider>
    </>)
}
