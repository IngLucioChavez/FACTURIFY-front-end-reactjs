import { Login } from "@/pages/Login";
import { Mensajes } from "@/pages/Mensajes";
import { createBrowserRouter, Navigate } from "react-router";

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
        element: <Navigate to={"/"} />,
    },
]);