"use client";

export default function Text_06() {
    return (
        <div className="flex items-center justify-center py-4">
            <h1 className="text-4xl sm:text-3xl font-bold starlight-text">
                Starlight
            </h1>
            <style>{`
                .starlight-text {
                    background: radial-gradient(
                        circle at center,
                        #fff 0%,
                        #eab308 20%,
                        #854d0e 40%,
                        #422006 100%
                    );
                    background-size: 200% 200%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: star-pulse 5s infinite radial;
                }
                @keyframes star-pulse {
                    0%, 100% { background-position: 0% 0%; filter: brightness(1); }
                    50% { background-position: 100% 100%; filter: brightness(1.5); }
                }
            `}</style>
        </div>
    );
}