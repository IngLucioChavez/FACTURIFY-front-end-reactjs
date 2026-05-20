import { useMemo } from 'react'

interface Circle {
    id: number
    size: number
    left: string
    top: string
    delay: string
    duration: string
}

export const FloatingCircles = () => {
    const circles = useMemo<Circle[]>(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            id: i,
            size: Math.random() * 150 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 10 + 8}s`,
        }))
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden">
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    className="floating-circle"
                    style={{
                        width: circle.size,
                        height: circle.size,
                        left: circle.left,
                        top: circle.top,
                        animationDelay: circle.delay,
                        animationDuration: circle.duration,
                    }}
                />
            ))}

            {/* Extra large background circles for depth */}
            <div
                className="absolute w-96 h-96 rounded-full opacity-10"
                style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
                    top: '-10%',
                    right: '-10%',
                }}
            />
            <div
                className="absolute w-80 h-80 rounded-full opacity-10"
                style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
                    bottom: '-5%',
                    left: '-5%',
                }}
            />
        </div>
    )
}
