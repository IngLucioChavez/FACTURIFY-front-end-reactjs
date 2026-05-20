import { useContext, useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { userContext } from '@/context/userContext'
import { useNavigate } from 'react-router'

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { login, authStatus } = useContext(userContext);
    const navigation = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        login(email, password);

        setIsLoading(false)
    }

    if (authStatus === "autenticado")
        navigation("/mensajes");

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Correo electrónico
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d4af37]/60" />
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-black/50 border border-[rgba(212,175,55,0.3)] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                    Contraseña
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d4af37]/60" />
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full pl-11 pr-12 py-3 bg-black/50 border border-[rgba(212,175,55,0.3)] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-all duration-300"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4af37]/60 hover:text-[#d4af37] transition-colors"
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-[rgba(212,175,55,0.3)] bg-black/50 text-[#d4af37] focus:ring-[#d4af37]/50 focus:ring-offset-0"
                    />
                    <span className="text-gray-400">Recordarme</span>
                </label>
                <a href="#" className="text-[#d4af37] hover:text-[#e5c04a] transition-colors">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] to-[#b8962d] text-black font-semibold rounded-xl hover:from-[#e5c04a] hover:to-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[rgba(212,175,55,0.2)]"
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Iniciando sesión...
                    </span>
                ) : (
                    'Iniciar sesión'
                )}
            </button>

            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[rgba(212,175,55,0.2)]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-black/40 text-gray-500">o continúa con</span>
                </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-black/50 border border-[rgba(212,175,55,0.2)] rounded-xl text-white hover:border-[#d4af37]/50 hover:bg-black/70 transition-all duration-300"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-black/50 border border-[rgba(212,175,55,0.2)] rounded-xl text-white hover:border-[#d4af37]/50 hover:bg-black/70 transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-400">
                ¿No tienes cuenta?{' '}
                <a href="#" className="text-[#d4af37] hover:text-[#e5c04a] font-medium transition-colors">
                    Regístrate
                </a>
            </p>
        </form>
    )
}
