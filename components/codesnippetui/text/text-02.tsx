"use client";

export default function Text_02() {
    return (
        <div className="flex items-center justify-center py-4">
            <h1 className="text-4xl sm:text-3xl font-bold reveal-mask relative">
                Mystic Reveal
            </h1>
            <style>{`
                .reveal-mask {
                    color: rgba(255, 255, 255, 0.1);
                    background: linear-gradient(to right, #4f46e5, #ec4899, #4f46e5);
                    background-clip: text;
                    -webkit-background-clip: text;
                    background-size: 200% auto;
                    animation: reveal 4s ease-in-out infinite;
                }
                @keyframes reveal {
                    0%, 100% { background-position: 0% 50%; opacity: 0.3; }
                    50% { background-position: 100% 50%; opacity: 1; }
                }
                .dark .reveal-mask {
                    color: rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
}