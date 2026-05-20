import { Login } from "@/pages/Login";
import { Mensajes } from "@/pages/Mensajes";
import { createBrowserRouter } from "react-router";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/mensajes",
        element: <Mensajes />,
    },
    {
        path: "*",
        element: <h3>Not Found!</h3>,
    },
]);