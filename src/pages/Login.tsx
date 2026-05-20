import { Sparkles } from "lucide-react"
import { FloatingCircles } from "../components/custom/FloatingCircles"
import { LoginForm } from "../components/custom/LoginForm"

export const Login = () => {

    // const mutateLogin = usePostLoginAction("aaa", "bbbb");

    return (
        <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
            {/* Floating golden circles background */}
            <FloatingCircles />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md mx-4">
                <div className="backdrop-blur-xl bg-black/40 border border-[rgba(212,175,55,0.2)] rounded-2xl p-8 shadow-2xl shadow-[rgba(212,175,55,0.1)]">
                    {/* Logo/Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962d] mb-4 shadow-lg shadow-[rgba(212,175,55,0.3)]">
                            <Sparkles className="w-8 h-8 text-black" />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Bienvenido</h1>
                        <p className="text-gray-400">Inicia sesión en tu cuenta</p>
                        {/* <h1 className="text-2xl text-red-300">{data?.message}</h1> */}
                    </div>

                    <LoginForm />

                </div>
            </div>
        </div>
    )
}
