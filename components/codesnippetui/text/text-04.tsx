"use client";

export default function Text_04() {
    return (
        <div className="flex items-center justify-center py-4">
            <div className="relative group cursor-default">
                <h1 className="text-4xl sm:text-3xl font-bold text-zinc-900 dark:text-white glitch-base">
                    Cyber Glitch
                </h1>
                <span className="absolute top-0 left-0 w-full h-full text-red-500 opacity-70 glitch-layer-1">Cyber Glitch</span>
                <span className="absolute top-0 left-0 w-full h-full text-cyan-500 opacity-70 glitch-layer-2">Cyber Glitch</span>
            </div>
            <style>{`
                .glitch-layer-1 { animation: glitch-1 2s infinite linear alternate-reverse; clip-path: inset(50% 0 30% 0); }
                .glitch-layer-2 { animation: glitch-2 2s infinite linear alternate-reverse; clip-path: inset(10% 0 80% 0); }
                
                @keyframes glitch-1 {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }
                @keyframes glitch-2 {
                    0% { transform: translate(0); }
                    20% { transform: translate(2px, -2px); }
                    40% { transform: translate(2px, 2px); }
                    60% { transform: translate(-2px, -2px); }
                    80% { transform: translate(-2px, 2px); }
                    100% { transform: translate(0); }
                }
            `}</style>
        </div>
    );
}