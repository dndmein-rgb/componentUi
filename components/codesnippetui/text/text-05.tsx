"use client";

export default function Text_05() {
    return (
        <div className="flex items-center justify-center py-4 bg-zinc-900 rounded-lg">
            <h1 className="text-4xl sm:text-3xl font-black uppercase tracking-widest relative liquid-text">
                Oceanic
            </h1>
            <style>{`
                .liquid-text {
                    color: transparent;
                    -webkit-text-stroke: 1px #3b82f6;
                    background: linear-gradient(#3b82f6 50%, #fff 50%);
                    background-size: 100% 200%;
                    background-clip: text;
                    -webkit-background-clip: text;
                    animation: fill 4s ease-in-out infinite;
                }
                @keyframes fill {
                    0%, 100% { background-position: 0% 100%; }
                    50% { background-position: 0% 0%; }
                }
            `}</style>
        </div>
    );
}